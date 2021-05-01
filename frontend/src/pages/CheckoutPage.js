import React from 'react';
import './CheckoutPage.css';
import CheckoutProduct from '../components/CheckoutProduct';
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
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { Button } from '@material-ui/core';

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="checkout">
      <h2 className="checkout__title">Your selection</h2>
      <Link to="/">Continue Shopping</Link>
      {cartItems.length === 0 ? (
        <Alert variant="outlined" severity="warning">
          Your cart is currently empty --- <Link to="/">Continue Shopping</Link>
        </Alert>
      ) : (
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
                    <img className="checkout__image" src={cartItem.image}></img>
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
      )}
      {/* <div className="checkout__left">
        <div></div>
        <Subtotal />
      </div> */}
      <div className="checkout__right"></div>
      <img
        className="checkout__ad"
        src={
          'https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png'
        }
        alt="record-store-ad"
      />
      <Footer />
    </div>
  );
}

export default CheckoutPage;
