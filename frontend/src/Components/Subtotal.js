import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

import { getBasketTotal } from "../reducer";

function Subtotal() {

  return (
    <div className="subtotal">
      {/* react component to format number in an input or as a text */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({basket.length} items): <strong>{value}</strong> */}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={2}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />

      <button>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default Subtotal;
