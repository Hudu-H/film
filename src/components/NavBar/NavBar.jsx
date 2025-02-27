import React from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Avatar, Button, useMediaQuery } from '@mui/material';
import { Menu, Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/styles';

// internal imports
import useStyles from './styles';

const NavBar = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');
	const theme = useTheme();
	const isAuthenticated = true;

	return (
		<>
			<AppBar position="fixed">
				<Toolbar className={classes.toolbar}>
					{isMobile && (
						<IconButton
							color="inherit"
							edge="start"
							style={{ outline: 'none' }}
							onClick={() => {}}
							className={classes.menuButton}
						>
							<Menu />
						</IconButton>
					)}
					<IconButton color="inherit" sx={{ ml: 1 }} onClick={() => {}}>
						{theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
					</IconButton>
					{!isMobile && 'Search ...'}
					<div>
						{!isAuthenticated ? (
							<Button color="inherit" onClick={() => {}}>
								Login &nbsp; <AccountCircle />
							</Button>
						) : (
							<Button
								color="inherit"
								component={Link}
								to={`/profile/:id`}
								onClick={() => {}}
								className={classes.linkButton}
							>
								{!isMobile && <>My Movies &nbsp;</>}
								<Avatar
									style={{ width: 30, height: 30 }}
									alt="Profile"
									src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
								/>
							</Button>
						)}
					</div>
					{isMobile && 'Search ...'}
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;
