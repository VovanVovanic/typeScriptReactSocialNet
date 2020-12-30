// import React from 'react';
// import ReactDOM from 'react-dom';
// import {
//   RootStateType,
// store
// } from "./components/redux/state";
// import './index.css';
// import App from './App';

// const state = store.getState()
// let renderTree =(state: RootStateType)=> {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App
//         state={store.getState()}
//         dispatch={store.dispatch.bind(store)}

//       />
//     </React.StrictMode>,
//     document.getElementById("root")
//   );
// }

// renderTree(state)
// store.subscribe(renderTree)

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store, { RootStateType } from "./redux/reduxStore";
import { Provider } from "react-redux";

let renderTree = (state:RootStateType) => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};
renderTree(store.getState());
store.subscribe(() => {
  let state = store.getState();
  renderTree(state);
});