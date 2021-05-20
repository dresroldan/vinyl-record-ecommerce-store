import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
  image: {
    maxWidth: '250px',
  },
}));

const ProductPage = ({ match }) => {
  const classes = useStyles();
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
    <Container maxWidth="md" className={classes.layout}>
      <Grid container alignItems="center" spacing={3}>
        <Grid item xs={12} md={6} align="center">
          <img className={classes.image} src={product.image} alt="" />
        </Grid>

        <Grid item xs={12} md={6}>
          <Grid container alignItems="center" spacing={3}>
            <Grid item>
              <Typography variant="h5" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="h7" gutterBottom>
                {product.description}
              </Typography>
              <Typography variant="h5" gutterBottom>
                {product.price}
              </Typography>

              <Typography gutterBottom>
                {product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                onClick={addToCartHandler}
              >
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductPage;
