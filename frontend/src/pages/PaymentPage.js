import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/cartActions';
import './PaymentPage.css';
import Grid from '@material-ui/core/Grid';
import ShippingPage from './ShippingPage';

function PaymentPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const address = useSelector((state) => state.cart);
  const { shippingAddress } = address;

  const dispatch = useDispatch();

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="payment">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <h1>
            Checkout (<Link to="/checkout">{cartItems.length} items</Link>)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{shippingAddress.address}</p>
              <p>
                {shippingAddress.city}, {shippingAddress.state}{' '}
                {shippingAddress.postalCode}
              </p>

              <p>{shippingAddress.country}</p>

              {/* <ShippingPage/> */}
            </div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="payment__items">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>PRODUCT</TableCell>
                  <TableCell align="right">PRICE</TableCell>
                  <TableCell align="right">QUANTITY</TableCell>
                  <TableCell align="right">TOTAL</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cartItems.map((cartItem) => (
                  <TableRow key={cartItem.name}>
                    <TableCell component="th" scope="row">
                      <div className="checkout__product">
                        <img
                          className="checkout__image"
                          src={cartItem.image}
                        ></img>
                        <div className="checkout__option">
                          <h3 className="checkout__productTitle">
                            {cartItem.title}
                          </h3>
                          <Link
                            className="checkout__link"
                            onClick={() => removeFromCartHandler(cartItem._id)}
                          >
                            Remove
                          </Link>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{cartItem.price}</TableCell>
                    <TableCell align="right">{cartItem.fat}</TableCell>
                    <TableCell align="right">{cartItem.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default PaymentPage;
