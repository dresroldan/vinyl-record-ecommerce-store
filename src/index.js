import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import Context from "./Context";

ReactDOM.render(
  <React.StrictMode>
    {/* state provider wraps around app so that every component can get access to the data layer */}
    <Context>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </Context>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
