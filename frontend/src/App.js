import Header from './components/Header';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import OrderPage from './pages/OrderPage';
import Footer from './components/Footer';
import home from './pages/home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
  return (
    <Router>
      <Header />

      <main>
        <Switch>
          <Route path="/order/:id" component={OrderPage}></Route>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={home}></Route>
        </Switch>
      </main>
      <Footer />
      {/* <StickyFooter /> */}
    </Router>
  );
}

export default App;
