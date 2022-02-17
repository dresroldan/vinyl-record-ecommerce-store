import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { listProductDetails } from '../actions/productActions';
import Button from '@material-ui/core/Button';
import './Productpage.css';

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

  const addToCartHandler = () => {
    dispatch(addToCart(product._id));
  };

  return (
    <section className="product-info">
      <div className="product-container">
        <div className="product-image">
          <img src={product.image} alt="record cover" />
        </div>

        <div className="product-description">
          <h1>{product.title}</h1>
          <p>{product.description}</p>
          <strong>{product.price}</strong>

          <p gutterBottom>
            {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
          </p>
          <Button variant="outlined" color="primary" onClick={addToCartHandler}>
            Add to cart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
