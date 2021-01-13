import { authReducer } from './reducers/auth';
import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile";
import {dialogReducer} from "./reducers/dialogs";
import { sidebarReducer } from "./reducers/sidebar";
import { usersReducer } from "./reducers/users";
import thunk from 'redux-thunk';
import{ reducer as formReducer} from 'redux-form'


const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer,
  form: formReducer
});


type rootReducerType = typeof reducers
export type RootStateType = ReturnType<rootReducerType>
const store = createStore(reducers, applyMiddleware(thunk))
// @ts-ignore
window.store = store;
export default store