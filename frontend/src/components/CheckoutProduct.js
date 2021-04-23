import React from 'react';
import './CheckoutProduct.css';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../actions/cartActions';

function CheckoutProduct({ _id, image, title, price }) {
  
  // dispatch is our action -- add/remove
  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(_id));
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <button onClick={removeFromCartHandler}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
