import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart  } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();

    return (
            <Card className={classes.root}>
                <Link to={`product-view/${product.id}`}>
                    <CardMedia className={classes.media} image={product.media.source} title={product.name} />
                    <CardContent>
                        <div className={classes.cardContent}>
                            <Typography gutterBottom variant="h6" component="h2">
                                {product.name}
                            </Typography>
                        </div>
                        {/* <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" /> */}
                    </CardContent>
                </Link>
                <CardActions disableSpacing className={classes.cardActions}>
                    <Typography variant="h6" component="h2">
                        ${product.price.formatted}
                    </Typography>
                    <IconButton aria-label="Add to Cart" className={classes.customButton} onClick={() => onAddToCart(product.id, 1)} >
                        < AddShoppingCart  />
                    </IconButton>
                </CardActions>
            </Card>
    )
}

export default Product
