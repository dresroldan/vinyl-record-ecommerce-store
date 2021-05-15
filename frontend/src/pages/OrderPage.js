import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './PaymentPage.css';
import Grid from '@material-ui/core/Grid';
import { getOrderDetails } from '../actions/orderActions';

function OrderPage({ match }) {
  const orderId = match.params.id;

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, []);

  return (
    <div className="payment">
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <h1>Order {order._id}</h1> */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
              {/* <p>{userInfo.username}</p> */}
              <p>123 REACT LANE</p>
              <p>CHICAGO, IL 60622</p>
            </div>
            <div className="payment__address"></div>
          </div>

          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
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
                {/* {order.orderItems.map((orderItem) => (
                  <TableRow key={orderItem.title}>
                    <TableCell component="th" scope="row">
                      <div className="checkout__product">
                        <img
                          className="checkout__image"
                          src={orderItem.image}
                          alt=""
                        ></img>
                        <div className="checkout__option">
                          <h3 className="checkout__productTitle">
                            {orderItem.title}
                          </h3>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="right">{orderItem.price}</TableCell>
                    <TableCell align="right">1</TableCell>
                    <TableCell align="right">{orderItem.price}</TableCell>
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default OrderPage;
