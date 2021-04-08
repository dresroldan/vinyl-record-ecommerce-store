import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <Header />

      <Switch>
      <Route path="/" exact component={Home}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signup" component={Signup}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Switch>
    </Router>
  );
}

export default App;
