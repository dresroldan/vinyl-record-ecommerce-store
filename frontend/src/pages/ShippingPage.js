import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { saveShippingAddress } from '../actions/cartActions';
import './ShippingPage.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '35ch',
    },
  },
}));

function ShippingPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const [state, setState] = useState(shippingAddress.state);

  const classes = useStyles();

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      saveShippingAddress({ address, city, postalCode, country, state })
    );
    history.push('/payment');
  };

  return (
    <div className="shipping">
      <div className="shipping__container">
        <h1>Shipping</h1>
        <form className={classes.root}>
          <div>
            <TextField
              id="standard-basic"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              label="Address"
            />

            <TextField
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              label="City"
              required
            />

            <TextField
              type="text"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              label="Country"
              required
            />

            <TextField
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              label="State"
              required
            />

            <TextField
              type="password"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              label="ZIP Code"
              required
            />
          </div>

          <button
            type="submit"
            onClick={submitHandler}
            className="shipping__submitButton"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default ShippingPage;
