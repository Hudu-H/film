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
import useStyles from './styles';

const MovieInformation = () => {
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);
	const classes = useStyles();

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

	return (
		<Grid2 container className={classes.containerSpaceAround}>
			<Grid2 item sm={12} lg={4}>
				<img
					className={classes.poster}
					src={`https://image.tmdb.org/t/p/w500/${data?.poster_path}`}
					alt={data?.title}
				/>
			</Grid2>
			<Grid2 item container direction="column" lg={7}>
				<Typography variant="h3" align="center" gutterBottom>
					{data?.title} ({data.release_date.split('-')[0]})
				</Typography>
			</Grid2>
		</Grid2>
	);
};

export default MovieInformation;
