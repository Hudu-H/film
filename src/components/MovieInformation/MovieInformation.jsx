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
// import { useSelector, useDispatch } from 'react-redux';

// internal imports
import { useGetMovieQuery } from '../../services/TMDB';
import useStyles from './styles';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';

const MovieInformation = () => {
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);
	const classes = useStyles();
	const dispatch = useDispatch();

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
				<Typography variant="h5" align="center" gutterBottom>
					{data?.tagline}
				</Typography>
				<Grid2 item className={classes.containerSpaceAround}>
					<Box display="flex" align="center">
						<Rating readOnly value={data.vote_average / 2} />
						<Typography gutterBottom variant="subtitle1" style={{ marginLeft: '10px' }}>
							{data?.vote_average} / 10
						</Typography>
					</Box>
					<Typography gutterBottom variant="h6" align="center">
						{data?.runtime}min{' '}
						{data.spoken_languages.length > 0 ? `/ ${data?.spoken_languages[0].name}` : ''}
					</Typography>
				</Grid2>
				<Grid2 item className={classes.genresContainer}>
					{data?.genres?.map((genre) => (
						<Link
							to="/"
							key={genre.name}
							className={classes.links}
							onClick={() => dispatch(selectGenreOrCategory(genre.id))}
						>
							<img
								src={genreIcons[genre.name.toLowerCase()]}
								height={30}
								className={classes.genreImage}
							/>
							<Typography variant="subtitle1" color="textPrimary">
								{genre.name}
							</Typography>
						</Link>
					))}
				</Grid2>
			</Grid2>
		</Grid2>
	);
};

export default MovieInformation;
