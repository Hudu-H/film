import axios from 'axios';

// create an instance
export const moviesApi = axios.create({
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

			window.location.href = `https://www.themoviedb.org/authenticate/${token}?redirect_to=${window.location.origin}/approved`;
		}
	} catch (error) {
		error.message('Sorry, try again');
	}
};

// create session
export const createSessionId = async () => {
	const token = localStorage.getItem('request_token');

	// check if token exist & generate new session ID
	if (token) {
		try {
			const {
				data: { session_id },
			} = await moviesApi.post('authentication/session/new', {
				request_token: token,
			});

			localStorage.setItem('session_id', session_id);
			return session_id;
		} catch (error) {
			console.log(error);
		}
	}
};
