import React from 'react';
import ReactDOM from 'react-dom';
import {
  RootStateType,
store
} from "./components/redux/state";
import './index.css';
import App from './App';

const state = store.getState()
let renderTree =(state: RootStateType)=> {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}

      />
    </React.StrictMode>,
    document.getElementById("root")
  );
}

renderTree(state)
store.subscribe(renderTree)

