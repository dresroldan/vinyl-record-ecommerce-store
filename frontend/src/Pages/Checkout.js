import React from 'react';
import './Checkout.css';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSelector } from 'react-redux';


import Subtotal from '../components/Subtotal';

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="checkout">
      <img
        className="checkout__ad"
        src={
          'https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png'
        }
        alt="record-store-ad"
      />
      <h2 className="checkout__title">Your selection</h2>
      <div className="checkout__left">
        <div>
          {/* passing product props to display item content in checkout basket 
          when adding item to basket this map array method creates a new array and will display onto checkout page */}

          {cartItems.map((cartItem) => (
            <CheckoutProduct
              id={cartItem._id}
              title={cartItem.title}
              price={cartItem.price}
              image={cartItem.image}
            />
          ))}
        </div>
        <Subtotal />
      </div>

      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
