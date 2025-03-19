import React, { useState, useEffect } from 'react';
import { Box, CircularProgress, useMediaQuery, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

// internal imports
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList } from '..';

// define movies comp
const Movies = () => {
	const { data } = useGetMoviesQuery();

	return (
		<div>
			<MovieList movies={data} />
		</div>
	);
};

export default Movies;
