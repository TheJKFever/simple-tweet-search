import "./index.css";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import reducers from "./reducers";
import registerServiceWorker from "./registerServiceWorker";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();