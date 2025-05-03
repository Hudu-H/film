import { makeStyles } from '@mui/styles';

// root or general comp styles
export default makeStyles((theme) => ({
	featuredCardContainer: {
		display: 'flex',
		justifyContent: 'center',
		marginBottom: '20px',
		textDecoration: 'none',
		height: '490px',
	},
	card: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'flex-end',
		width: '100%',
	},
	cardRoot: {
		position: 'relative',
	},
	cardMedia: {
		position: 'absolute',
		top: '0',
		right: '0',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.57)',
		backgroundBlendMode: 'darken',
	},
	cardContent: {
		width: '40%',
		color: '#fff',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	},
	cardContentRoot: {
		position: 'relative',
		backgroundColor: 'transparent',
	},
}));
