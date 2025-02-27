import React from 'react';
import { AppBar, Toolbar, IconButton, Drawer, Avatar, Button, useMediaQuery } from '@mui/material';
import { Menu, Brightness4, Brightness7, AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';

// internal imports
import useStyles from './styles';

const NavBar = () => {
	const classes = useStyles();
	const isMobile = useMediaQuery('(max-width:600px)');
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
				</Toolbar>
			</AppBar>
		</>
	);
};

export default NavBar;
