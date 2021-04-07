import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import Signup from "./Signup";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Context from "./Context";

function App() {
  return (
    // BEM
    <BrowserRouter>
      <Context>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/checkout" component={Checkout}></Route>
        </Switch>
      </Context>
    </BrowserRouter>
  );
}

export default App;
