import React, { useState, useEffect }  from 'react';
import { Grid, Container, Button, Typography, Divider } from '@material-ui/core';
import useStyles from './styles';
import { ShoppingCart } from '@material-ui/icons';
import { commerce } from '../../../lib/commerce';

const ProductView = ({ addProduct }) => {
    const classes = useStyles();
    const [product, setProduct] = useState({});
    const [quantity, setQuantity] = useState(1);


    const fetchProducts = async (id) => {
        const response = await commerce.products.retrieve(id);
        const { name, price, media, quantity, description } = response;
        setProduct({
            id,
            name,
            quantity,
            description,
            src: media.source,
            price: price.formatted_with_symbol
        });
    };

    useEffect(() => {
        const id = window.location.pathname.split("/");
        fetchProducts(id[2]);        
    }, []);

    const handleQuantity = (param) => {
        if (param === "decrise" && quantity > 1){
            setQuantity(quantity - 1);
        }
        if (param === "increase" && quantity < 10){
            setQuantity(quantity + 1);
        }
    };

    return (
        <Container className={classes.productView}>

            <Grid container spacing={4}>

                <Grid item xs={12} md={8} className={classes.imageWrapper}>
                    <img src={product.src} alt={product.name} />
                </Grid>

                <Grid item xs={12} md={4} className={classes.text}>
                    <Typography variant="h4">{product.name}</Typography>
                    <Divider />
                    <Typography 
                        dangerouslySetInnerHTML={{ __html: product.description }}
                        variant="p"
                    /> 
                    <br /><br />
                    
                    <Typography variant="h4">{product.price}</Typography>
                    <Divider /> 
                    <Grid container spacing={4} className={classes.buttons}>
                        <div className={classes.flexQuantity}>
                            <Grid item xs={12}>
                            <Button 
                                    size="small" 
                                    variant="contained" 
                                    color="secondary" 
                                    onClick={() => {
                                        handleQuantity("decrise");
                                    }}>-</Button>
                            </Grid>
                            <Typography className={classes.quantity}variant="h6">{quantity}</Typography>
                            <Grid item xs={12}>
                            <Button 
                                    size="small" 
                                    variant="contained" 
                                    color="primary"
                                    onClick={() => {
                                        handleQuantity("increase");
                                    }}>+</Button>
                                
                            </Grid>
                        </div>
                        <Grid item xs={12}>
                            <Button
                                size="large" 
                                className={classes.customButton}
                                onClick={() => {
                                    addProduct(product.id, quantity)
                                }}
                            >
                                <ShoppingCart /> Add to Cart
                            </Button>
                        </Grid>

                    </Grid>

                </Grid>

            </Grid>
        </Container>
    )
}

export default ProductView
