import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Subtotal() {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const getBasketTotal = (cartItems) =>
    cartItems?.reduce((amount, item) => item.price + amount, 0);

  const checkoutHandler = () => {
    history.push('/login?redirect=checkout');
  };

  return (
    <div className="subtotal">
      <div className="subtotal__cost">
        <CurrencyFormat
          renderText={(value) => (
            <>
              <p>
                Subtotal ({cartItems.length} items): <strong>{value}</strong>
              </p>
              <small className="subtotal__gift">
                Taxes and shipping calculated at checkout
              </small>
            </>
          )}
          decimalScale={2}
          value={getBasketTotal(cartItems)}
          displayType={'text'}
          thousandSeperator={true}
          prefix={'$'}
        />
      </div>

      <div className="subtotal__option">
        <button disabled={cartItems.length === 0} onClick={checkoutHandler}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default Subtotal;
