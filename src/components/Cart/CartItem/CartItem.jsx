import React from 'react';
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();
    console.log(item);

    return (
        <Card className={classes.root}>
            <Link to={`product-view/${item.product_id}`}>
                <CardMedia image={item.media.source} alt={item.name} className={classes.media} />
                <CardContent className={classes.cardContent}>
                    <Typography variant="h6">{item.name}</Typography>
                </CardContent>
            </Link>
            <CardActions className={classes.cardActions}>
                <div className={classes.buttons}>
                    <Typography variant="h6">{item.line_total.formatted_with_symbol}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
                </div>
                <Button variant="contained" type="button" color="secondary"  onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}

export default CartItem
