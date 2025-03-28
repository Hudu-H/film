import { makeStyles } from '@mui/styles';

// comp styles
export default makeStyles((theme) => ({
	movie: {
		padding: '10px',
	},
	links: {
		alignItems: 'center',
		fontWeight: 'bolder',
		textDecoration: 'none',
		[theme.breakpoints.up('xs')]: {
			display: 'flex',
			flexDirection: 'column',
		},
		'&:hover': {
			cursor: 'pointer',
		},
	},
	image: {
		borderRadius: '20px',
		marginBottom: '10px',
		height: '300px',
		'&:hover': {
			transform: 'scale(1.05)',
		},
	},
	title: {
		color: theme.palette.text.primary,
		textOverflow: 'ellipsis',
		overflow: 'hidden',
		width: '230px',
		whiteSpace: 'nowrap',
		textAlign: 'center',
		marginTop: '10px',
		marginBottom: '0',
	},
}));
