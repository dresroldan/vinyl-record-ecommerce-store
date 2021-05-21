import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './HomePage.css';
import Product from '../components/Product';
import Newsletter from '../components/Newsletter';
import { listProducts } from '../actions/productActions';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Button, Grid, InputBase, Paper, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  layout: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
  newsletter: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${"'https://res.cloudinary.com/dzrk9qfvp/image/upload/v1616077591/MOCK_AD_pbhjv1.png'"})`,
    height: '275px',
    backgroundSize: 'cover',
    color: '#fff',
  },
  form: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 270,
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url(${"'https://images.unsplash.com/photo-1541667558913-5510fb3c7bd9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'"})`,
    height: '400px',
    backgroundSize: 'cover',
    color: '#fff',
  },
  heroText: {
    bottom: '50px',
    position: 'absolute',
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
        <Container className={classes.heroText}>
          <span>Features</span>
          <Typography variant="h4" style={{ fontWeight: 600 }}>
            Our favorite new releases this week{' '}
          </Typography>
        </Container>
      </div>

      <Container className={classes.layout}>
        {/* <Grid>
          <Typography variant="h4">Shop</Typography>
          <Typography variant="h6" gutterBottom>
            Collect our newest releases
          </Typography>
        </Grid> */}
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

      <Grid
        container
        className={classes.newsletter}
        justify="center"
        align="center"
      >
        {/* <Grid item xs={12}>
          <Typography variant="h5" style={{ fontWeight: 600 }} align="center">
            Join our Newsletter
          </Typography>
          <Typography align="center" gutterBottom>
            New releases, exclusives, features, films and more.
          </Typography>
          <Paper component="form" className={classes.form}>
            <InputBase
              className={classes.input}
              placeholder="Enter your email"
              inputProps={{ 'aria-label': 'search google maps' }}
            />
            <Button> Sign Up</Button>
          </Paper>
        </Grid> */}
      </Grid>
    </>
  );
}

export default HomePage;
