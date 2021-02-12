import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    productView: {
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '150px 0 100px 0',
        padding: '5px 15px',
        "@media (min-width: 960px)": {
            height: '88vh',
            margin: '40px 0 0',
            }
    },
    imageWrapper: {
        "& img": {
        maxWidth: '70%',
        align: 'center',
        marginLeft: '3rem'
        },
    },
    
    text: {
        fontSize: '1.1rem',
        marginBottom: '5px',

        "@media (max-width: 600px)": {
            fontSize: '1rem'
            },

        "& h4": {
            fontSize: '1.5rem',
            fontWeight: 'bold',
            marginBottom: '0.9rem',
            color: '#ffb400'
        },

        "& p": {
            fontSize: '1.1rem',
            marginTop: '0.9rem',
            marginBottom: '0.9rem',
        },
    },

    flexQuantity: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: '0.5rem'
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        color: '#ff6200',
        marginTop: '0.9rem',
        justifyContent: 'space-between',
    },

    quantity: {
        paddingRight: '0.5rem',
        paddingLeft: '0.5rem',
    },

    customButton: {
    background: '#000000',
    color: '#ff6200',
    marginBottom: '1.4rem',
    '&:hover': {
        color: '#000000',
        background: '#ffb400',
        }
    }
}));