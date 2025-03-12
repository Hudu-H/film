import { configureStore } from '@reduxjs/toolkit';

// internal imports
import { tmdbApi } from '../services/TMDB';

export default configureStore({
	reducer: {
		[tmdbApi.reducerPath]: tmdbApi.reducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tmdbApi.middleware),
});
