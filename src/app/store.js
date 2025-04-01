import { configureStore } from '@reduxjs/toolkit';

// internal imports
import { tmdbApi } from '../services/TMDB';
import genreOrCategoryReducer from '../features/currentGenreOrCategory';
import userReducer from '../features/auth';

// central store
export default configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
		currentGenreOrCategory: genreOrCategoryReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
