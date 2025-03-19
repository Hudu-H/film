import React from 'react';
import { Typography, Grid2, Tooltip, Grow, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
	const classess = useStyles();
	console.log(movie, i);

	return (
		<Grid2 item xs={12} sm={6} md={4} lg={3} xl={2} className={classess.movie}>
			<Typography variant="h5" className={classess.title}>
				{movie.title}
			</Typography>
		</Grid2>
	);
};

export default Movie;
