import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authMe,  loginMe, logoffMe } from "../../api/api";
import { dataType } from "../reducers/auth";
import { RootStateType } from "../reduxStore";
import { SET_USER_DATA } from "./types";

export type setUserDataType = ReturnType<typeof setUserData>
export type StopSubmitType = ReturnType<typeof stopSubmit>
export const setUserData =(data:dataType, isLogged: boolean) => { 
    return { type: SET_USER_DATA, data, isLogged } as const;
}

export const getUserData = ():ThunkAction<void, RootStateType, unknown, setUserDataType> => {
  return (dispatch) => {
        authMe().then((data) => {
          if (data.resultCode === 0) {
          dispatch(setUserData(data.data, true))
        }
      });
  }
}
export const login = (email: string, password: string, rememberMe: boolean):ThunkAction<void, RootStateType, unknown, FormAction> => {
  return (dispatch) => {
    loginMe(email, password, rememberMe).then((data) => {
          if (data.resultCode === 0) {
          dispatch(getUserData())
          } else {
            let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error appeared'
            dispatch(stopSubmit('login', { _error: errorMessage }))
          }
      });
  }
}

export const logoff = ():ThunkAction<void, RootStateType, unknown, setUserDataType> => {
  return (dispatch) => {
        logoffMe().then((data) => {
          if (data.resultCode === 0) {
         dispatch(setUserData({  id: null, email: null, login: null}, false))
        }
      });
  }
}