import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

const Review = ({ checkoutToken, shippingData }) => {

    const shippingFilter = checkoutToken.live.shipping.available_options;
    const shippingId = shippingFilter.filter(option => option["id"] === shippingData.shippingOption)
    const shippingCost = shippingId[0]["price"];
    let total = parseFloat(checkoutToken.live.subtotal.raw + shippingCost.raw).toFixed(2);

    return (
        <>
            <Typography variant="h6" gutterBottom>Order Summary</Typography>
            <List disablePadding>
                {checkoutToken.live.line_items.map((product) => (
                    <ListItem style={{padding: '10px 0'}} key={product.name}>
                        <ListItemText primary={product.name} secondary={`Quantity: ${product.quantity}`} />
                        <Typography variant='body2'>{product.line_total.formatted_with_symbol}</Typography>
                    </ListItem>
                ))}
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText secondary='Subtotal' />
                    <Typography variant="body2" style={{ fontWeight: 400 }}>
                        {checkoutToken.live.subtotal.formatted_with_symbol}
                    </Typography>
                </ListItem>
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText secondary='Shipping' />
                    <Typography variant="body2" style={{ fontWeight: 400 }}>
                        {shippingCost.formatted_with_symbol}
                    </Typography>
                </ListItem>
                <ListItem style={{padding: '10px 0'}}>
                    <ListItemText primary='Total' />
                    <Typography variant="subtitle1" style={{ fontWeight: 700 }}>
                        ${total}
                    </Typography>
                </ListItem>
            </List>
        </>
    )
}

export default Review
