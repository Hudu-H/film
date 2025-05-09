import { makeStyles } from '@mui/styles';

// root or general comp styles
export default makeStyles(() => ({
	root: {
		display: 'flex',
		height: '100%',
	},
	toolbar: {
		height: '70px',
	},
	content: {
		width: '100%',
		flexGrow: '1',
		padding: '2em',
	},
}));
