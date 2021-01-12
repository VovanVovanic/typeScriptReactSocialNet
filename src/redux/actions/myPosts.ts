

import { ThunkAction } from "redux-thunk";
import { getThisStatus, getThisUser,  updateThisStatus,  } from "../../api/api";
import { ProfileType } from "../reducers/profile";
import { RootStateType } from "../reduxStore";
import {ADD_POST, ADD_POST_VALUE, SET_STATUS, SET__PROFILE} from "./types";




type auxType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type postsActionType = ReturnType<auxType<typeof postsActions>>


export const postsActions = {
 onPostAddedAction:() => {
    return { type: ADD_POST } as const;
},
onInputValueAction: (text:string)=> {
    return { type: ADD_POST_VALUE, text } as const
}, 
setProfile:(profile: ProfileType) => {
    return { type: SET__PROFILE, profile } as const;
  },
 setStatus: (status:string)=> {
    return { type: SET_STATUS, status } as const
}
}

export const setProfileData = (id: string): ThunkAction<void, RootStateType, unknown, postsActionType> => {
  return (dispatch) => {
        getThisUser(id).then((data) => {
      dispatch(postsActions.setProfile(data));
    });
  }
}

export const getStatus = (id: string): ThunkAction<void, RootStateType, unknown, postsActionType> => {
  return (dispatch) => {
      getThisStatus(id).then((data) => { 
      dispatch(postsActions.setStatus(data));
    });
  }
}


export const setNewStatus = (status: string): ThunkAction<void, RootStateType, unknown, postsActionType> => {
  return (dispatch) => {
    updateThisStatus(status).then((data) => {
      if (data.resultCode === 0) {
        dispatch(postsActions.setStatus(status));
      }
    });
  }
}
