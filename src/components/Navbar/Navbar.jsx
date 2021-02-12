import React from 'react';
import { AppBar, Toolbar, Badge, Typography, IconButton } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';
import logo from '../../assets/little-ones.png';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Little Ones Logo" height="75px" className={classes.image} />
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname !== '/cart' && location.pathname !== '/checkout' && (
                    <div className={classes.button}>
                        <IconButton className={classes.customButton} component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;
