import { SET_CAPTCHA } from './../actions/types';

import { InitializeDataType, SetCaptchaType, setUserDataType } from "../actions/auth";
import {  INITIALIZE_DATE, SET_USER_DATA } from "../actions/types";


export type dataType = {
  id: null | number
  email: null | string
  login: null | string
  
}
export type authStateType = dataType & {
  initialized: boolean
  isFetching: boolean
  isLogged: boolean
  imageSrc: null | string
  captcha: null | string
}

const initialState: authStateType = {
  initialized: false,
  id: null,
  email: null,
  login: null,
  imageSrc:null,
  isFetching: true,
  isLogged: false,
  captcha: null 
}

export const authReducer = (state: authStateType = initialState, action: setUserDataType | InitializeDataType | SetCaptchaType)
  : authStateType => {
  switch (action.type) {
      case SET_USER_DATA: return { ...state, isLogged: action.isLogged, isFetching: false, ...action.data }
    case INITIALIZE_DATE: return { ...state, initialized: true, isFetching: false }
    case SET_CAPTCHA: return{...state, captcha: action.captcha}
        default:
        { return state } 
        
    }
}
