import React from 'react';
import './Product.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: '250px',
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
    <Grid container alignItems="center" className={classes.layout} spacing={1}>
      <Grid item xs={12}>
        {' '}
        <Link to={`/product/${_id}`}>
          <img src={image} alt="mardeluz-single" />
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Link href={`/product/${_id}`}>
          <p>{title}</p>
        </Link>
      </Grid>
      <Grid item xs={12}>
        {' '}
        <small>$</small>
        <strong>{price}</strong>
      </Grid>

      <Grid item xs={12}>
        <Button
          variant="contained"
          color="light"
          disableElevation
          onClick={addToCartHandler}
        >
          Add to cart
        </Button>
      </Grid>
    </Grid>
  );
}

export default Product;
