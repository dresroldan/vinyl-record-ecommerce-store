import React from 'react';
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

function CheckoutProduct({ _id, image, title, price, description }) {
  // dispatch is our action -- add/remove
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__info">
        <img className="checkoutProduct__image" src={image} alt="" />

        <div>
          <p className="checkoutProduct__title">{title}</p>
          <button onClick={removeFromCartHandler}>Remove from Basket</button>
        </div>
      </div>
      <p className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
    </div>
  );
}

export default CheckoutProduct;
