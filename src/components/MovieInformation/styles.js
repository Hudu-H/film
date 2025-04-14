import { Padding } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { height } from '@mui/system';

// root or general comp styles
export default makeStyles((theme) => ({
	containerSpaceAround: {
		display: 'flex',
		justifyContent: 'space-around',
		margin: '10px 0 !important',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column',
			flexWrap: 'wrap',
		},
	},
	poster: {
		boxShadow: '0.5em 1em 1em rgb(64, 64, 80)',
		borderRadius: '20px',
		width: '80%',
		[theme.breakpoints.down('md')]: {
			width: '50%',
			height: '350px',
			margin: '0 auto',
		},
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '350px',
			margin: '0 auto',
			marginBottom: '30px',
		},
	},
	genresContainer: {
		margin: '10px 0 !important',
		display: 'flex',
		justifyContent: 'space-around',
		flexWrap: 'wrap',
	},
	genreImage: {
		filter: theme.palette.mode === 'dark' && 'invert(1)',
		marginRight: '10px',
	},
	links: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.down('md')]: {
			Padding: '0.5rem 1rem',
		},
	},
	castImage: {
		borderRadius: '10px',
		width: '100%',
		maxWidth: '7em',
		height: '8em',
		objectFit: 'cover',
	},
}));
