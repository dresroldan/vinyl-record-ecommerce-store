import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import { listProducts } from '../actions/productActions';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  layout: {
    width: 'auto',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(10),
  },
}));

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <div className="home__image">
        <div className="home__imagetext">
          <span>Features</span>
          <h1>Our favorite new releases this week </h1>
        </div>
      </div>

      <Container className={classes.layout}>
        <Grid>
          <Typography variant="h4">Shop</Typography>
          <Typography variant="h6">Collect our newest releases</Typography>
        </Grid>

        <div className="home__product">
          {products.map((product) => (
            <Product
              _id={product._id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </Container>
    </>
  );
}

export default HomePage;
