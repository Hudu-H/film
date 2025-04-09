import { Height } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';

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
		borderRadius: '20PX',
		width: '80%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: '350px',
			margin: '0 auto',
			marginBottom: '30px',
		},
		[theme.breakpoints.down('md')]: {
			width: '70%',
			height: '350px',
			margin: '0 auto',
		},
	},
}));
