import { authReducer } from './reducers/auth';
import {combineReducers, createStore} from "redux";
import {profileReducer} from "./reducers/profile";
import {dialogReducer} from "./reducers/dialogs";
import { sidebarReducer } from "./reducers/sidebar";
import { usersReducer } from "./reducers/users";


const reducers = combineReducers({
  profile: profileReducer,
  dialogs: dialogReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
  auth: authReducer
});

type rootReducerType = typeof reducers
export type RootStateType = ReturnType<rootReducerType>
const store = createStore(reducers)
export default store