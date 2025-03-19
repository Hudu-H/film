import React from 'react';
import Grid2 from '@mui/material/Grid2';

// internal imports
import useStyles from './styles';
import { Movie } from '..';

const MovieList = ({ movies }) => {
	const classes = useStyles();

	return (
		<Grid2 container className={classes.moviesContainer}>
			{movies.results.map((movie, i) => (
				<Movie key={i} movie={movie} i={i} />
			))}
		</Grid2>
	);
};

export default MovieList;
