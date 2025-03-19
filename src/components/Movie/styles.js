import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
	movie: {
		padding: '10px',
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
