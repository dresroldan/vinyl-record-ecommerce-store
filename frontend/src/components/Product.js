import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  button: {
    width: '100%',
  },
}));

function Product({ _id, image, title, price }) {
  const classes = useStyles();
  const productId = _id;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
  };

  return (
    <Grid container alignItems="center"  spacing={1}>
      <Grid item xs={12}>
        {' '}
        <Link to={`/product/${_id}`}>
          <img src={image} alt="mardeluz-single" />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link href={`/product/${_id}`}>
          <Typography variant="subtitle2">{title}</Typography>
        </Link>
      </Grid>
      <Grid item xs={12}>
        {' '}
        <small>$</small>
        <strong>{price}</strong>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="outlined"
          color="primary"
          disableElevation
          onClick={addToCartHandler}
          className={classes.button}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
}

export default Product;
