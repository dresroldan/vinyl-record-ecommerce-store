import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';

function Subtotal() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getBasketTotal = (cartItems) =>
    cartItems?.reduce((amount, item) => item.price + amount, 0);

  return (
    <div className="subtotal">
      {/* react component to format number in an input or as a text */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cartItems.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(cartItems)}
        displayType={'text'}
        thousandSeperator={true}
        prefix={'$'}
      />

      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
