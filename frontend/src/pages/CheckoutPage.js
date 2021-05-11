import React from 'react';
import './CheckoutPage.css';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import Subtotal from '../components/Subtotal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="checkout">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h2>Your selection</h2>
        </Grid>

        {/* <Link to="/">Continue Shopping</Link> */}
        {cartItems.length === 0 ? (
          <Alert variant="outlined" severity="warning">
            Your cart is currently empty ---{' '}
            <Link to="/">Continue Shopping</Link>
          </Alert>
        ) : (
          <Grid item xs={12}>
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
          </Grid>
        )}
        <Grid item xs={12}>
          <Subtotal />
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default CheckoutPage;
