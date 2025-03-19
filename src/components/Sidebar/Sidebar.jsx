// review useFffect hook or remove later
import React, { useEffect } from 'react';
import {
	List,
	ListItem,
	ListItemIcon,
	Divider,
	ListItemText,
	ListSubheader,
	Box,
	CircularProgress,
} from '@mui/material';
import { useTheme } from '@mui/styles';
import { Link } from 'react-router-dom';

//internal imports
import useStyles from './styles';

//logos
const blueLogo = 'https://fontmeme.com/permalink/250228/0991b8c9865596562beba546572aab28.png';
const redLogo = 'https://fontmeme.com/permalink/250228/e66c4f5f6e7088308cce5c6adf693884.png';

const categories = [
	{
		lable: 'Popular',
		value: 'popular',
	},
	{
		lable: 'Top Rated',
		value: 'top_rated',
	},
	{
		lable: 'Upcoming',
		value: 'upcoming',
	},
];
const demoCategories = [
	{
		lable: 'Action',
		value: 'action',
	},
	{
		lable: 'Horror',
		value: 'horror',
	},
	{
		lable: 'Comedy',
		value: 'comedy',
	},
	{
		lable: 'Animation',
		value: 'animation',
	},
];

// sidebar comp
const Sidebar = ({ setMobileOpen }) => {
	const theme = useTheme();
	const classes = useStyles();

	return (
		<>
			<Link to="/" className={classes.imageLink}>
				<img
					className={classes.image}
					src={theme.palette.mode === 'light' ? blueLogo : redLogo}
					alt="film logo"
				/>
			</Link>
			<Divider />
			<List>
				<ListSubheader>Categories</ListSubheader>
				{categories.map(({ lable, value }) => (
					<Link key={value} className={classes.links} to="/">
						<ListItem onClick={() => {}} button>
							{/* <ListItemIcon>
								<img src={redLogo} height={30} className={classes.genreImage} />
							</ListItemIcon> */}
							<ListItemText primary={lable} />
						</ListItem>
					</Link>
				))}
			</List>
			<Divider />
			<List>
				<ListSubheader>Genres</ListSubheader>
				{demoCategories.map(({ lable, value }) => (
					<Link key={value} className={classes.links} to="/">
						<ListItem onClick={() => {}} button>
							{/* <ListItemIcon>
								<img src={redLogo} height={30} className={classes.genreImage} />
							</ListItemIcon> */}
							<ListItemText primary={lable} />
						</ListItem>
					</Link>
				))}
			</List>
		</>
	);
};

export default Sidebar;
