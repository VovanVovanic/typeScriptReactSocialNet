
import { setUserDataType } from "../actions/auth";
import {  SET_USER_DATA } from "../actions/types";


export type dataType = {
  userId: null | string
  email: null | string
  login: null | string
  imageSrc:null | string
}
export type authStateType = dataType & {
  isFetching: boolean
  isLogged: boolean
}

const initialState:authStateType = {
  userId: null,
  email: null,
  login: null,
  imageSrc:null,
  isFetching: true,
  isLogged: false
}

export const authReducer = (state:authStateType = initialState, action:setUserDataType):authStateType => {
    switch (action.type) {
        case SET_USER_DATA: return {...state, isLogged: true, isFetching:false, ...action.data}  
        default:
        {return state} 
    }
}