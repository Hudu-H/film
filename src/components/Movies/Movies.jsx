import React, { useState } from 'react';
import { Box, CircularProgress, Typography, useMediaQuery } from '@mui/material';
import { useSelector } from 'react-redux';

// internal imports
import { useGetMoviesQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

// define movies comp
const Movies = () => {
	// hooks
	const [page, setPage] = useState(1);
	const { genreIdOrCategoryName, searchQuery } = useSelector(
		(state) => state.currentGenreOrCategory
	);
	const { data, isFetching, error } = useGetMoviesQuery({
		genreIdOrCategoryName,
		page,
		searchQuery,
	});
	const lg = useMediaQuery((theme) => theme.breakpoints.only('lg'));

	const numberOfMovies = lg ? 16 : 18;

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
			<MovieList movies={data} numberOfMovies={numberOfMovies} />
			<Pagination currentPage={page} setPage={setPage} totalPages={data.total_pages} />
		</div>
	);
};

export default Movies;
