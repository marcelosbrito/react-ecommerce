import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    root: {
        flexGrow: 1,
    },
    products: {
        paddingTop: '60px',
        paddingBottom: '30px'
    }
}));