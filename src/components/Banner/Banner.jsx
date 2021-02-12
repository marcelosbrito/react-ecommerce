import React from 'react';
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';

const Banner = () => {
    const classes = useStyles();
    
    return (
        
        <div className={classes.banner}>
        <Container>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6}>
                    <Typography className={classes.title} variant="h1">
                    Welcome to Little Ones
                    </Typography>
                    <Typography gutterBottom className={classes.title} variant="h1">
                    Pet Store
                    </Typography>
                    <Button className={classes.shoppingButton} href="#products">
                    Shopping
                    </Button>
                </Grid>
            </Grid>
        </Container>
    </div>
    )
}

export default Banner
