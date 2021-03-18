import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal"

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png"
          alt=""
        />
      
      <div>
        <h2 className="checkout__title">Your shopping basket</h2>
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
        {/* basket item */}
      </div>
      </div>

      <div className="checkout__right">
        <Subtotal/>
      </div>
    </div>
  );
}

export default Checkout;