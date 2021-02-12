import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    container:{
        minHeight: '100vh',
    },
    title: {
        marginTop: '5vh',
        fontWeight: "bold"
    },
    subtitle: {
        fontSize: '2rem',
        marginBottom: '20px',
    }, 
    subtotal: {
        fontWeight: "bold"
    },
    emptyButton: {
        marginBottom: '10%',
        minWidth: '150px',
        [theme.breakpoints.down('xs')]: {
        marginBottom: '5px',
        },
        [theme.breakpoints.up('xs')]: {
        marginRight: '20px',
        },
    },
    checkoutButton: {
        minWidth: '150px',
        marginBottom: '10%',
    },
    link: {
        textDecoration: 'none',
    },
    cardDetails: {
        display: 'flex',
        marginTop: '5vh',
        width: '100%',
        justifyContent: 'space-between',
    },
    basketBanner: {
        paddingTop: '150px',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        align: 'center'
    },
    brand: {
        display: 'flex',
        align: 'center',
        width: '100%',
        size: '220px',
        
    },    

    shoppingButton: {
        color: '#000000',
        background: '#ffb400',
        '&:hover': {
            background: '#ff6200'
        }
    }
}));