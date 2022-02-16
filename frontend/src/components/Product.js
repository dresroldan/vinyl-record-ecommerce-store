import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';
import { Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import './product.css';

const useStyles = makeStyles((theme) => ({
  button: {
    width: '100%',
  },
}));

const Product = ({ _id, image, title, price }) => {
  const productId = _id;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [switchButton, setSwitchButton] = useState('ADD TO CART');

  const addToCartHandler = () => {
    dispatch(addToCart(productId));
    handleClick();
  };

  function handleClick() {
    if (switchButton === 'ADD TO CART') {
      setSwitchButton('ADDED');
    }
  }

  return (
    <Grid container alignItems="center" spacing={1}>
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
          {switchButton}
        </Button>
      </Grid>
    </Grid>
  );
};

export default Product;
