import { makeStyles } from '@mui/styles';

// movie container styles
export default makeStyles((theme) => ({
	moviesContianer: {
		display: 'flex',
		flexWrap: 'wrap',
		overflow: 'auto',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			justifyContent: 'center',
		},
	},
}));
