import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProductPage from './pages/ProductPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/signup" component={SignupPage}></Route>

          <Route path="/login" component={LoginPage}></Route>

          <Route path="/checkout" component={CheckoutPage}></Route>

          <Route path="/product/:id" component={ProductPage}></Route>

          <Route path="/" component={HomePage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
