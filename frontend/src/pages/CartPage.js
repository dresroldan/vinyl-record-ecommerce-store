import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Grid from '@material-ui/core/Grid';
import { Box, Button, Container, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router';

const useStyles = makeStyles((theme) => ({
  cartPage: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  button: { width: '235px' },
  image: {
    width: '100px',
    height: 'auto',
    paddingRight: '20px',
  },
}));

const CheckoutPage = () => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getBasketTotal = (cartItems) =>
    cartItems?.reduce((amount, item) => item.price + amount, 0);

  const checkoutHandler = () => {
    history.push('/login?redirect=checkout');
  };

  const removeFromCartHandler = (_id) => {
    dispatch(removeFromCart(_id));
  };

  return (
    <Container className={classes.cartPage} maxWidth="md">
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <Typography variant="h6" style={{ fontWeight: 600 }} align="center">
            Your selection
          </Typography>
        </Grid>

        {cartItems.length === 0 ? (
          <Grid item xs={12} align="center">
            <Link to="/">Continue Shopping</Link>
          </Grid>
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
                    <div>
                      <img
                        className={classes.image}
                        src={cartItem.image}
                        alt=""
                      ></img>
                      <div>
                        <h3>{cartItem.title}</h3>

                        <Link
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
        )}
        <Grid item xs={12} justify="flex-end" align="center">
          <CurrencyFormat
            renderText={(value) => (
              <>
                <Typography variant="h6">
                  Subtotal ({cartItems.length} items): <strong>{value}</strong>
                </Typography>

                <Typography variant="caption">
                  Taxes and shipping calculated at checkout
                </Typography>
              </>
            )}
            decimalScale={2}
            value={getBasketTotal(cartItems)}
            displayType={'text'}
            thousandSeperator={true}
            prefix={'$'}
          />
          <Box mt={3}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={cartItems.length === 0}
              onClick={checkoutHandler}
            >
              CHECKOUT
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CheckoutPage;
