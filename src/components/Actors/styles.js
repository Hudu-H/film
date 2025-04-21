import { makeStyles } from '@mui/styles';

// root or general comp styles
export default makeStyles(() => ({
	image: {
		borderRadius: '20px',
		objectFit: 'cover',
		maxWidth: '70%',
		boxShadow: '0.5em 0.5em 1em',
	},
}));
