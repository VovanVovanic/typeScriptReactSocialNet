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

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
export default store