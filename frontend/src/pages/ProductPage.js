import React, { useEffect } from 'react';
import './ProductPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Grid from '@material-ui/core/Grid';

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
    <div className="productpage">
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={6} align="center">
          <img className="productpage__image" src={product.image} alt="" />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className="productpage__details">
            <h2 className="productpage__heading">{product.title}</h2>
            <p>{product.description}</p>
            <p className="productpage__price">{product.price}</p>
            <p className="productpage__stock">
              {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
            </p>
            <button onClick={addToCartHandler}>Add to cart</button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductPage;
