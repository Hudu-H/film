import React from 'react';
import { Typography, Grid2, Tooltip, Grow, Rating } from '@mui/material';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Movie = ({ movie, i }) => {
	const classess = useStyles();
	console.log(movie, i);

	return <div>Movie</div>;
};

export default Movie;
