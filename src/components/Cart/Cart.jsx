import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import { ShoppingCart } from "@material-ui/icons";
import { Link } from 'react-router-dom';


import useStyles from './styles';
import CartItem from './CartItem/CartItem';

const Cart = ( { cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart } ) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <div className={classes.basketBanner}>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className={classes.subtitle} variant="h1">
                        You have no items in your shopping cart, press Shopping for adding new products.
                        </Typography>
                        <Button className={classes.shoppingButton} component={Link} to="/">
                        Shopping
                        </Button>
                    </Grid>
                    <Grid className={classes.brand} item xs={12} sm={6}>
                        <ShoppingCart fontSize="inherit" style={{ fontSize: "200px" }}/>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );

    const FilledCart = () => (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography gutterBottom variant="h5" className={classes.subtotal} >
                    Subtotal: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button gutterBottom className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>
                        Empty Cart
                    </Button>
                    <Button gutterBottom component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">
                        Checkout
                    </Button>
                </div>
            </div>
        </Container>
    );

    if(!cart.line_items) return 'Loading...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h5" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }

        </Container>
    )
}

export default Cart
