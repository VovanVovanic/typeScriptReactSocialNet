import { postsActionType} from "../actions/myPosts";
import { ADD_POST, SET_PHOTOS, SET_STATUS, SET__PROFILE } from "../actions/types";
import { ContactsType, PhotosType } from "./users";

export type postType = { post: string, like: number }
export type postListType = Array<postType>
export type newPostTextType = string


export type ProfileType = {
  userId: number
  contacts: ContactsType
  fullName: string
  lookingForAJob: false
  lookingForAJobDescription: null | string
    photos: PhotosType
    aboutMe: string
  
}
export type profileStateType = typeof initialState

const initialState= {
    postList: [
        {post: "My message", like: 1},
        { post: "My second message", like: 6 }],
    profile: null as ProfileType | null,

    status: ''
}

export const profileReducer = (state: profileStateType = initialState, action: postsActionType): profileStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { post: action.value, like: 3 }
            return {
                ...state,
                postList: [...state.postList, newPost],
            }
        }
        case SET__PROFILE:
            return { ...state, profile: action.profile }

        case SET_STATUS:
            return { ...state, status: action.status }
        case SET_PHOTOS: 
            return {...state, profile:{...state.profile, photos:action.photos} as ProfileType }
        default:
            { return state }
    }
}