import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data';
import './ProductPage.css';

import { useStateValue } from '../StateProvider';

const ProductPage = ({ match, id, title, image, price, description }) => {
  const product = products.find((p) => p._id === match.params.id);

  const [
    ,
    // { basket }

    dispatch,
  ] = useStateValue();

  // console.log("this is the basket >>>", basket);

  const addToBasket = () => {
    // dispatches the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        description: description,
      },
    });
  };

  return (
    <div className="productpage">
      <div className="productpage__container">
        <div className="productpage__productinfo">
          <img className="productpage__image" src={product.image} />

          <div className="productpage__productdetails">
            <h2 className="productpage__heading">{product.title}</h2>
            <p className="productpage__price">{product.price}</p>
            <p>{product.description}</p>
          </div>
        </div>

        <div className="productpage__options">
          <button onClick={addToBasket}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
