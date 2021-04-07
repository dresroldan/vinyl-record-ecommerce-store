import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
// import { removeFromBasket } from "./reducer";

function CheckoutProduct({ id, image, title, price, rating }) {
  // basket contains our selected product items
  // dispatch is our action -- add/remove
  const [
    ,
    // { basket }

    dispatch,
  ] = useStateValue();

  // this function removes our selected item/s from the basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
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

        {/* <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div> */}
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
