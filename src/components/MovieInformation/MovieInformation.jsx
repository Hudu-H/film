import React from 'react';
import {
	Modal,
	Typography,
	Button,
	ButtonGroup,
	CircularProgress,
	Box,
	Grid2,
	useMediaQuery,
	Rating,
} from '@mui/material';
import {
	Movie as MovieIcon,
	Language,
	Theaters,
	Favorite,
	FavoriteBorderOutlined,
	PlusOne,
	Remove,
	ArrowBack,
} from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

// internal imports
import { useGetMovieQuery } from '../../services/TMDB';

const MovieInformation = () => {
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);

	// edge cases
	if (isFetching) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<CircularProgress size="8rem" />
			</Box>
		);
	}
	// error
	if (error) {
		return (
			<Box display="flex" justifyContent="center" alignItems="center">
				<Link to="/">There was an error, Kindly go back</Link>
			</Box>
		);
	}

	return <div>MovieInformation {id}</div>;
};

export default MovieInformation;
