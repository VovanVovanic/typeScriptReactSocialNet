
import { Action } from 'redux';
import { FormAction, stopSubmit } from 'redux-form';
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { getThisStatus, getThisUser, updatePhoto, updateProfile, updateThisStatus, } from "../../api/api";
import { ProfileDataType } from "../../components/Profile/editProfileForm";
import { ProfileType } from "../reducers/profile";
import { PhotosType } from "../reducers/users";
import { RootStateType } from "../reduxStore";
import { ADD_POST, SET_PHOTOS, SET_STATUS, SET__PROFILE } from "./types";




type auxType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type postsActionType = ReturnType<auxType<typeof postsActions>>


export const postsActions = {
  onPostAddedAction: (value: string) => {
    return { type: ADD_POST, value } as const;
  },
  setProfile: (profile: ProfileType) => {
    return { type: SET__PROFILE, profile } as const;
  },
  setStatus: (status: string) => {
    return { type: SET_STATUS, status } as const
  },
  setPhotos: (photos: PhotosType) => {
    return { type: SET_PHOTOS, photos } as const
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
    }).catch((e) => {
      debugger
    })
  }
}

export const setNewPhoto = (ava: string | Blob): ThunkAction<void, RootStateType, unknown, postsActionType> => {
  return (dispatch) => {
    updatePhoto(ava).then((data) => {
      if (data.resultCode === 0) {
        dispatch(postsActions.setPhotos(data.data.photos))
      }
    }).catch((e) => {
      
    })
  }
}

export const setUpdatedProfile = (profile: ProfileDataType): ThunkType => async (dispatch, getState) => {
  let currentId = getState().auth.id
  let Id = currentId && currentId.toString()
  const response = await updateProfile(profile);
  if (response.resultCode === 0) {
    dispatch(setProfileData(Id as string))
  }else {
    dispatch(stopSubmit('myProfileForm', { _error: response.messages[0].substring(30, response.messages[0].length-1) }))
    return Promise.reject(response.messages[0])
  }

}
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, RootStateType, unknown, A>
type ThunkType = BaseThunkType<postsActionType | FormAction>