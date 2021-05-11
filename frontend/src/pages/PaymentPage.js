import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../actions/cartActions';
import './PaymentPage.css';
import Grid from '@material-ui/core/Grid';
import { createOrder } from '../actions/orderActions';

function PaymentPage({ history }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const user = useSelector((state) => state.userLogin);
  const { userInfo } = user;

  const dispatch = useDispatch();

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success } = orderCreate;

  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
      })
    );
  };

  useEffect(() => {
    if (success) {
      history.push(`/order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, success]);

  return (
    <div className="payment">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h1>
            Checkout (<Link to="/checkout">{cartItems.length} items</Link>)
          </h1>
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
              <p>{userInfo.username}</p>
              <p>123 REACT LANE</p>
              <p>CHICAGO, IL 60622</p>
            </div>
            <div className="payment__address"></div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
              <button onClick={placeOrderHandler}>place order</button>
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
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
                          alt=""
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
                    <TableCell align="right">1</TableCell>
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
