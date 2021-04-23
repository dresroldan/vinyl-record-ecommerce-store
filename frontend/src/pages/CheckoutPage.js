import React from 'react';
import './CheckoutPage.css';
import CheckoutProduct from '../components/CheckoutProduct';
import { useSelector } from 'react-redux';
import Footer from '../components/Footer';

import Subtotal from '../components/Subtotal';

function CheckoutPage() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="checkout">
      <h2 className="checkout__title">Your selection</h2>
      <div className="checkout__left">
        <div>
          {/* passing product props to display item content in checkout basket 
          when adding item to basket this map array method creates a new array and will display onto checkout page */}
          {cartItems.map((cartItem) => (
            <CheckoutProduct
              _id={cartItem._id}
              title={cartItem.title}
              price={cartItem.price}
              image={cartItem.image}
            />
          ))}
        </div>
        <Subtotal />
      </div>

      <div className="checkout__right"></div>
      <img
        className="checkout__ad"
        src={
          'https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png'
        }
        alt="record-store-ad"
      />
      <Footer></Footer>
    </div>
  );
}

export default CheckoutPage;
