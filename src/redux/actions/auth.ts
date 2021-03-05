
import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";
import { authMe,  loginMe, logoffMe, getCaptchaUrl } from "../../api/api";
import { dataType } from "../reducers/auth";
import { RootStateType } from "../reduxStore";
import { INITIALIZE_DATE, SET_CAPTCHA, SET_USER_DATA } from "./types";

export type setUserDataType = ReturnType<typeof setUserData>
export type StopSubmitType = ReturnType<typeof stopSubmit>
export type InitializeDataType = ReturnType<typeof initializeData>
export type SetCaptchaType = ReturnType<typeof setCaptcha>

export const setUserData = (data: dataType, isLogged: boolean) => { 
    return { type: SET_USER_DATA, data, isLogged } as const;
}
export const initializeData = () => {
  return{type: INITIALIZE_DATE} as const
}
export const setCaptcha = (captcha: string) => {
debugger
  return{ type: SET_CAPTCHA, captcha} as const
}

const getUserData = (): ThunkAction<void, RootStateType, unknown, setUserDataType> => {
  return (dispatch) => {
        authMe().then((data) => {
          if (data.resultCode === 0) {
          dispatch(setUserData(data.data, true))
          }
        }).catch((e) => {
      });
  }
}
export const initializeUserData = (): ThunkAction<void, RootStateType, unknown, InitializeDataType> => {
  return (dispatch) => {
    let promise = dispatch(getUserData())
    Promise.all([promise]).then(() => {
      dispatch(initializeData())
    })
  }
}
const getCaptcha = (): ThunkAction<void, RootStateType, unknown, SetCaptchaType> => {
  return (dispatch) => {
   getCaptchaUrl().then((data) => {
    dispatch(setCaptcha(data.url))
    })
  }
}
  
export const login = (email: string, password: string, rememberMe: boolean, captcha: null | string):ThunkAction<void, RootStateType, unknown, FormAction> => {
  return (dispatch) => {
    loginMe(email, password, rememberMe, captcha).then((data) => {
          if (data.resultCode === 0) {
            dispatch(getUserData())
          } else {
            if (data.resultCode === 10) {
              dispatch(getCaptcha())
            }
            let errorMessage = data.messages.length > 0 ? data.messages[0] : 'Some error appeared'
            dispatch(stopSubmit('login', { _error: errorMessage }))
          }
    }).catch((e) => {
       
      })
  }
}

export const logoff = ():ThunkAction<void, RootStateType, unknown, setUserDataType> => {
  return (dispatch) => {
        logoffMe().then((data) => {
          if (data.resultCode === 0) {
         dispatch(setUserData({  id: null, email: null, login: null}, false))
        }
      }).catch((e)=>{})
  }
}