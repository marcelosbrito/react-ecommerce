import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        transition: "0.3s",
        margin: "auto",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
            boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',        
        color: '#ff6200'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        fontWeight: "bold",
        color: '#000000',
        
        
    },
    customButton: {
    color: '#ff6200',
    '&:hover': {
        color: '#ffb400'
    }
}
}));