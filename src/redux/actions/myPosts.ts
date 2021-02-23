

import { ThunkAction } from "redux-thunk";
import { getThisStatus, getThisUser,  updatePhoto,  updateThisStatus,  } from "../../api/api";
import { ProfileType } from "../reducers/profile";
import { PhotosType } from "../reducers/users";
import { RootStateType } from "../reduxStore";
import {ADD_POST,  SET_PHOTOS,  SET_STATUS, SET__PROFILE} from "./types";




type auxType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type postsActionType = ReturnType<auxType<typeof postsActions>>


export const postsActions = {
 onPostAddedAction:(value:string) => {
    return { type: ADD_POST, value } as const;
},
setProfile:(profile: ProfileType) => {
    return { type: SET__PROFILE, profile } as const;
  },
 setStatus: (status:string)=> {
    return { type: SET_STATUS, status } as const
  },
  setPhotos: (photos: PhotosType) => {
   return {type: SET_PHOTOS, photos} as const
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

export const setNewPhoto = (ava: string | Blob): ThunkAction<void, RootStateType, unknown, postsActionType> => {
  return (dispatch) => {
    updatePhoto(ava).then((data) => {
      console.log(data);
      if (data.resultCode === 0) {
        dispatch(postsActions.setPhotos(data.data.photos))
      }
    })
  }
}