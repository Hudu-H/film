import axios from 'axios';

// create an instance
const moviesApi = axios.create({
	baseURL: 'https://api.themoviedb.org/3/',
	params: {
		api_key: import.meta.env.VITE_TMDB_KEY,
	},
});

// auth token
export const fetchToken = async () => {
	try {
		const { data } = await moviesApi.get('/authentication/token/new');

		// console.log(data);

		const token = data.request_token;

		if (data.success) {
			localStorage.setItem('request_token', token);

			window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}approved`;
		}
	} catch (error) {
		error.message('Sorry, try again');
	}
};
