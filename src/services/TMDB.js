// import RTK for query mapping
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// TMBD KEY
const tmdbApiKey = import.meta.env.VITE_TMDB_KEY;
// const page = 1;

export const tmdbApi = createApi({
	reducerPath: 'tmdbApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3/',
	}),
	endpoints: (builder) => ({
		// Get genres
		getGenres: builder.query({
			query: () => `/genre/movie/list?api_key=${tmdbApiKey}`,
		}),

		// Get movies by type
		getMovies: builder.query({
			query: ({ genreIdOrCategoryName, page, searchQuery }) => {
				// get movies by category
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string') {
					return `movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`;
				}
				// get movies by genre
				if (genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number') {
					return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`;
				}
				// get movie by search
				if (searchQuery) {
					return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`;
				}

				return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
			},
		}),
	}),
});

// export movies queries
export const { useGetGenresQuery, useGetMoviesQuery } = tmdbApi;
