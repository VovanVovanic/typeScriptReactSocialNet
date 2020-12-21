import { profileActionsTypes } from "../actions/myPosts";
import { ADD_POST, ADD_POST_VALUE } from "../actions/types";

export type postType = { post: string, like: number }
export type postListType = Array<postType>
export type newPostTextType = string

export type profileStateType = typeof initialState

const initialState= {
    postList: [
        {post: "My message", like: 1},
        {post: "My second message", like: 6 }],

    newPostText: ''
}

export const profileReducer = (state:profileStateType = initialState, action:profileActionsTypes):profileStateType => {
    switch (action.type) {
        case ADD_POST_VALUE: return {...state, newPostText: action.text}
           
        case ADD_POST:  {
            let newPost = { post: state.newPostText, like: 3 }
            return {
                ...state,
                postList :[...state.postList, newPost],
            newPostText:""
            }
        }
        default:
        {return state} 
    }
}