import React from 'react';
import './CartPage.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Subtotal from '../components/Subtotal';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  cartPage: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));
function CheckoutPage() {
  const classes = useStyles();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <Container className={classes.cartPage} maxWidth="md">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Your selection
          </Typography>
        </Grid>

        {cartItems.length === 0 ? (
          <Grid item xs={12} align="center">
            <Link to="/">Continue Shopping</Link>
          </Grid>
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
    </Container>
  );
}

export default CheckoutPage;
