import { ThunkAction } from "redux-thunk";
import { authMe, getThisUser } from "../../api/api";
import { dataType } from "../reducers/auth";
import { RootStateType } from "../reduxStore";
import { SET_USER_DATA } from "./types";

export type setUserDataType = ReturnType<typeof setUserData>

export const setUserData =(data:dataType) => { 
    return { type: SET_USER_DATA, data } as const;
}

export const getUserData = ():ThunkAction<void, RootStateType, unknown, setUserDataType> => {
  return (dispatch) => {
        authMe().then((data) => {
          if (data.resultCode === 0) {
          console.log(data.data);
          dispatch(setUserData(data.data))
          // getThisUser(data.data.id).then((data) => {
          //   console.log(data.photos.small);
          // });
        }
      });
  }
}