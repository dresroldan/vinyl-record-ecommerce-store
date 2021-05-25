import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import StickyFooter from './components/StickyFooter';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import theme from './theme';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <Switch>
            <Route path="/order/:id" component={OrderPage}></Route>
            <Route path="/signup" component={SignupPage}></Route>
            <Route path="/login" component={LoginPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/product/:id" component={ProductPage}></Route>
            <Route path="/" component={HomePage}></Route>
          </Switch>
        </main>
        <StickyFooter />
      </ThemeProvider>
    </Router>
  );
}

export default App;
