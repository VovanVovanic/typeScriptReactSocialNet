
import { setUserDataType } from "../actions/auth";
import {  SET_USER_DATA } from "../actions/types";


export type dataType = {
  id: null | number
  email: null | string
  login: null | string
  
}
export type authStateType = dataType & {
  isFetching: boolean
  isLogged: boolean
  imageSrc:null | string
}

const initialState:authStateType = {
  id: null,
  email: null,
  login: null,
  imageSrc:null,
  isFetching: true,
  isLogged: false
}

export const authReducer = (state:authStateType = initialState, action:setUserDataType):authStateType => {
    switch (action.type) {
        case SET_USER_DATA: return {...state, isLogged: action.isLogged, isFetching:false, ...action.data}  
        default:
        {return state} 
    }
}
