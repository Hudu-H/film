import { createSlice } from '@reduxjs/toolkit';

// general category endpoints
export const genreOrCategory = createSlice({
	name: 'genreOrCategory',
	initialState: {
		genreIdOrCategoryName: '',
		page: '',
		searchQuery: '',
	},
	reducers: {
		selectGenreOrCategory: (state, action) => {
			state.genreIdOrCategoryName = action.payload;
			state.searchQuery = '';
		},
		searchMovie: (state, action) => {
			state.searchQuery = action.payload;
		},
	},
});

// actions
export const { selectGenreOrCategory, searchMovie } = genreOrCategory.actions;

export default genreOrCategory.reducer;
