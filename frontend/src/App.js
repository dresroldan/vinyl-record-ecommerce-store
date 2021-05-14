import Header from './components/Header';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PaymentPage from './pages/PaymentPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/payment" component={PaymentPage}></Route>
          <Route path="/signup" component={SignupPage}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route path="/checkout" component={CheckoutPage}></Route>
          <Route path="/product/:id" component={ProductPage}></Route>
          <Route path="/" component={HomePage}></Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
