import React from 'react';
import { Grid, Container } from '@material-ui/core';

import Product from './Product/Product';
import Banner from "../Banner/Banner";
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return (
    <>
        <Banner />
        <Container className={classes.products} id='products'>
            <div className={classes.toolbar} />
            <Grid container spacing={4}>
                {products.map((product) => (
                <Grid key={product.id} item xs={12} sm={6} md={4}>
                    <Product product={product} onAddToCart={onAddToCart}/>
                </Grid>
                ))}
            </Grid>
        </Container>
    </>
    )
}

export default Products;