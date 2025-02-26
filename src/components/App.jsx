import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CssBaseline } from '@mui/material';

// internal components
import { Actors, MovieInformation, Movies, Profile, NavBar } from './';

const App = () => {
	return (
		<div>
			<CssBaseline />
			<NavBar />
			<main>
				<Routes>
					<Route path="/" exact element={<Movies />} />
					<Route path="/movie/:id" exact element={<MovieInformation />} />
					<Route path="/actors/:id" exact element={<Actors />} />
					<Route path="/profile/:id" exact element={<Profile />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
