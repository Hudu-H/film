import React, { useState, useEffect } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// internal imports
import useStyles from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

// search comp
const Search = () => {
	// hooks
	const [query, setQuery] = useState('');
	const classes = useStyles();
	const dispatch = useDispatch();

	// dispatch handleKeyDown
	const handleKeyDown = (event) => {
		if (event.key === 'Enter') {
			dispatch(searchMovie(query));
		}
	};

	return (
		<div className={classes.searchContainer}>
			<TextField
				onKeyDown={handleKeyDown}
				onChange={(e) => setQuery(e.target.value)}
				value={query}
				variant="standard"
				slotProps={{
					input: {
						className: classes.input,
						startAdornment: (
							<InputAdornment position="start">
								<SearchIcon />
							</InputAdornment>
						),
					},
				}}
			/>
		</div>
	);
};

export default Search;
