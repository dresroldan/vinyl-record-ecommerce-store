import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core';
import theme from './theme';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import OrderPage from './pages/OrderPage';
import CheckoutPage from './pages/CheckoutPage';
import StickyFooter from './components/StickyFooter';

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
            <Route path="/cart" component={CartPage}></Route>
            <Route path="/checkout" component={CheckoutPage}></Route>
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
