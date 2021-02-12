import { makeStyles } from '@material-ui/core/styles';
import banner from '../../assets/little-one-banner.png';
import minbanner from '../../assets/little-one-min-banner.png';

export default makeStyles((theme) => ({
    banner: {
        paddingTop: '40vh',
        paddingBottom: '40vh',
        width: '100%',
        height: 'auto',
        display: 'flex',
        align: 'center',
        backgroundImage: `url(${banner})`,
        "@media (max-width: 600px)": {
            paddingTop: '78vh',
            paddingBottom: '5vh',
            backgroundImage: `url(${minbanner})`
        },
    },

    title: {
    fontSize: '2.5rem',
    marginbottom: '20px',
    fontWeight: 'bold',
    "@media (max-width: 600px)": {
        color: '#ff6200',
        fontSize: '2rem'
        }
    },
    
    shoppingButton: {
    color: '#000000',
    background: '#ffb400',
    '&:hover': {
        background: '#ff6200'
    }
    }
    
}));