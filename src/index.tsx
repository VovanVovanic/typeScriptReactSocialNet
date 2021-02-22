

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store, { RootStateType } from "./redux/reduxStore";
import { Provider } from "react-redux";
import AppContainer from "./App";
import { HashRouter } from "react-router-dom";

let renderTree = (state:RootStateType) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <AppContainer />
      </HashRouter>
    </Provider>,
    document.getElementById("root")
  );
};
renderTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});