// import { Title } from "@material-ui/icons";
import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

// props in es6 allow you to deconstruct the object you pass in.
// here we are using props to deconstruct title, image, price, and rating from the product object.
// props allows reusability and efficiency in components.

function Product({ id, title, image, price, rating }) {
  const [
    ,
    // { basket }

    dispatch,
  ] = useStateValue();

  // console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    // dispatches the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} alt="mardeluz-single" />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <button onClick={addToBasket}>Add to cart</button>
      </div>
    </div>
  );
}

export default Product;
