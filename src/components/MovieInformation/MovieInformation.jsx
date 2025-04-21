import React, { useState } from 'react';
import {
	Modal,
	Typography,
	Button,
	ButtonGroup,
	CircularProgress,
	Box,
	Grid2,
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
import { useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';

// internal imports
import { useGetMovieQuery, useGetRecommendationsQuery } from '../../services/TMDB';
import useStyles from './styles';
import genreIcons from '../../assets/genres';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';
import { MovieList } from '..';

const MovieInformation = () => {
	const { id } = useParams();
	const { data, isFetching, error } = useGetMovieQuery(id);
	const { data: recommendations } = useGetRecommendationsQuery({
		list: 'recommendations',
		movie_id: id,
	});
	const classes = useStyles();
	const dispatch = useDispatch();
	const [open, setOpen] = useState(false);

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

	// is movie favorited
	const isMovieFavorited = false;

	// is movie watchlisted
	const isMovieWatchlisted = false;

	// add movie to favorites
	const addToFavorites = () => {};

	// add movie to watchlist
	const addToWatchlist = () => {};

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
				<Typography variant="h5" gutterBottom style={{ marginTop: '10px' }}>
					Overview
				</Typography>
				<Typography style={{ marginBottom: '2rem' }}>{data?.overview}</Typography>
				<Typography gutterBottom variant="h5">
					Top Cast
				</Typography>
				<Grid2 item container spacing={2}>
					{data &&
						data?.credits?.cast
							?.map(
								(character, i) =>
									character.profile_path && (
										<Grid2
											item
											key={i}
											xs={4}
											md={2}
											component={Link}
											to={`/actors/${character.id}`}
											style={{ textDecoration: 'none' }}
										>
											<img
												className={classes.castImage}
												src={`https://image.tmdb.org/t/p/w500/${character.profile_path}`}
												alt={character.name}
											/>
											<Typography color="textPrimary">{character?.name}</Typography>
											<Typography color="textSecondary">
												{character.character.split('/')[0]}
											</Typography>
										</Grid2>
									)
							)
							.slice(0, 8)}
				</Grid2>
				<Grid2 item container style={{ marginTop: '2rem' }}>
					<div className={classes.buttonsContainer}>
						<Grid2 item xs={12} sm={6} className={classes.buttonsContainer}>
							<ButtonGroup variant="outlined" size="small">
								<Button
									rel="noopener noreferrer"
									target="_blank"
									href={data?.homepage}
									endIcon={<Language />}
								>
									Website
								</Button>
								<Button
									rel="noopener noreferrer"
									target="_blank"
									href={`https://www.imdb.com/title/${data?.imdb_id}`}
									endIcon={<MovieIcon />}
								>
									IMDB
								</Button>
								<Button onClick={() => setOpen(true)} href="#" endIcon={<Theaters />}>
									Trailers
								</Button>
							</ButtonGroup>
						</Grid2>
						<Grid2 item xs={12} sm={6} className={classes.buttonsContainer}>
							<ButtonGroup variant="outlined" size="medium">
								<Button
									onClick={addToFavorites}
									endIcon={isMovieFavorited ? <FavoriteBorderOutlined /> : <Favorite />}
								>
									{isMovieFavorited ? 'Unfavorited' : 'Favorite'}
								</Button>
								<Button
									onClick={addToWatchlist}
									endIcon={isMovieWatchlisted ? <Remove /> : <PlusOne />}
								>
									watchlist
								</Button>
								<Button endIcon={<ArrowBack />} sx={{ borderColor: 'primary.main' }}>
									<Typography
										to="/"
										component={Link}
										variant="subtitle2"
										color="inherit"
										style={{ textDecoration: 'none' }}
									>
										Back
									</Typography>
								</Button>
							</ButtonGroup>
						</Grid2>
					</div>
				</Grid2>
			</Grid2>
			<Box marginTop="5rem" width="100%">
				<Typography align="center" variant="h3" gutterBottom>
					Movie recommendations
				</Typography>
				{recommendations ? (
					<MovieList movies={recommendations} numberOfMovies={12} />
				) : (
					<Box>Sorry nothing was foound.</Box>
				)}
			</Box>
			<Modal
				closeAfterTransition
				open={open}
				className={classes.modal}
				onClose={() => setOpen(false)}
			>
				{data?.videos?.results?.length > 0 && (
					<iframe
						className={classes.video}
						autoPlay
						title="trailer"
						allow="autoPlay"
						src={`https://www.youtube.com/embed/${data.videos.results[0].key}`}
					/>
				)}
			</Modal>
		</Grid2>
	);
};

export default MovieInformation;
