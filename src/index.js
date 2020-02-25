import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./Reducers";
import setUpSocket from "./sockets";
import createSagaMiddleware from "redux-saga";
import handleNewMessage from "./sagas";
import username from "./utils/name";

const sagasMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagasMiddleware));

const socket = setUpSocket(store.dispatch, username);

sagasMiddleware.run(handleNewMessage, { socket, username });

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
