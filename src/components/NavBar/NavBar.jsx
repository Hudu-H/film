import React, { useEffect, useState, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Avatar, Button, useMediaQuery } from '@mui/material';
import { Menu, Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';

// internal imports
import useStyles from './styles';
import { Search, Sidebar } from '..';
import { fetchToken, moviesApi, createSessionId } from '../../utils';
import { setUser, userSelector } from '../../features/auth';
import { ColorModeContext } from '../../utils/ToggleColorMode';

// nav comp
const NavBar = () => {
	// hooks
	const { isAuthenticated, user } = useSelector(userSelector);
	const [mobileOpen, setMobileOpen] = useState(false);
	const isMobile = useMediaQuery('(max-width:600px)');
	const theme = useTheme();
	const dispatch = useDispatch();
	const classes = useStyles();

	//fetch token & session ID
	const token = localStorage.getItem('request_token');
	const sessionIdFromLocalStorage = localStorage.getItem('session_id');

	const colorMode = useContext(ColorModeContext);

	useEffect(() => {
		const logInUser = async () => {
			if (token) {
				if (sessionIdFromLocalStorage) {
					const { data: userData } = await moviesApi.get(
						`/account?session_id=${sessionIdFromLocalStorage}`
					);
					dispatch(setUser(userData));
				} else {
					const sessionId = await createSessionId();
					const { data: userData } = await moviesApi.get(`/account?session_id=${sessionId}`);

					dispatch(setUser(userData));
				}
			}
		};

		logInUser();
	}, [token]);

	return (
		<>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					{isMobile && (
						<IconButton
							color="inherit"
							edge="start"
							style={{ outline: 'none' }}
							onClick={() => {
								setMobileOpen((prevMobileOpen) => !prevMobileOpen);
							}}
							className={classes.menuButton}
						>
							<Menu />
						</IconButton>
					)}
					<IconButton color="inherit" sx={{ ml: 1 }} onClick={colorMode.toggleColorMode}>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && <Search />}
					<div>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={fetchToken}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to={`/profile/${user.id}`}
								onClick={() => {}}
								className={classes.linkButton}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{ width: 30, height: 30 }}
									alt="Profile"
									src={`https://www.themoviedb.org/t/p/w64_and_h64_face${user?.avatar?.tmdb?.avatar_path}`}
								/>
							</Button>
						)}
					</div>
					{isMobile && <Search />}
				</Toolbar>
			</AppBar>
			<div>
				<nav className={classes.drawer}>
					{isMobile ? (
						<Drawer
							anchor="right"
							variant="temporary"
							open={mobileOpen}
							onClose={() => {
								setMobileOpen((prevMobileOpen) => !prevMobileOpen);
							}}
							classes={{ paper: classes.drawerPaper }}
							ModalProps={{ keepMounted: true }}
						>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					) : (
						<Drawer classes={{ paper: classes.drawerPaper }} variant="permanent" open>
							<Sidebar setMobileOpen={setMobileOpen} />
						</Drawer>
					)}
				</nav>
			</div>
		</>
	);
};

export default NavBar;
