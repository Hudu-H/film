import React from 'react';
import Grid2 from '@mui/material/Grid2';

// internal imports
import useStyles from './styles';
import { Movie } from '..';

// movie-list comp
const MovieList = ({ movies, numberOfMovies }) => {
	// define classses
	const classes = useStyles();

	return (
		<Grid2 container className={classes.moviesContainer}>
			{movies.results.slice(0, numberOfMovies).map((movie, i) => (
				<Movie key={i} movie={movie} i={i} />
			))}
		</Grid2>
	);
};

export default MovieList;
