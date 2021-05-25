import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { listProductDetails } from '../actions/productActions';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(10),
  },
  image: {
    maxWidth: '250px',
  },
  button: {
    width: '300px',
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
                variant="outlined"
                color="primary"
                onClick={addToCartHandler}
                className={classes.button}
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
