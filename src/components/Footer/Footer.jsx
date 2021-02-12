import React from 'react';
import useStyles from './styles';

const Footer = () => {
    const classes = useStyles();
    const date = new Date();
    const fullYear = date.getFullYear();
    
    return (
        <footer className={classes.footer}>
        <p>
            Little Ones Pet Store &copy; Copyright {fullYear}
        </p>
        </footer>
    );
};
export default Footer
