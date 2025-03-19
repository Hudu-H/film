import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// internal imports
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

// define movies comp
const Movies = () => {
	const { data, isFetching, error } = useGetMoviesQuery();

	// data loading state
	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center">
				<CircularProgress size="4rem" />
			</Box>
		);
	}

	// if no movie found
	if (!data.results.length) {
		return (
			<Box display="flex" alignItems="center" mt="20px">
				<Typography variant="4">
					No movies found <br /> Try again.
				</Typography>
			</Box>
		);
	}

	// error handling
	if (error) return 'Unfortunately an error occured.';
	return (
		<div>
			<MovieList movies={data} />
		</div>
	);
};

export default Movies;
