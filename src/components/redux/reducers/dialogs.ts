
import { dialogsType } from "../actions/messages";
import { ADD_MESSAGE, ADD_MESSAGE_VALUE } from "../actions/types";

export type newMessageTextType = string
export type userType = { label: string }
export type usersType = typeof initialState.users
export type messageType = { label: string, id: number }
export type messagesType = Array<messageType>

export type dialogsStateType = typeof initialState

const initialState = {
        newMessageText: '',
        users: [
            {label: "Anna"},
            {label: "Natalya"},  
            {label: "Vladimir"},
            {label: "Mike"},
            {label: "John"},
            {label: "Piter"},
            {label: "Alex"},
            {label: "Frank"}
        ],  

        messages: [
            { label: "I am fine", id: 1 },
            { label: "Hello", id: 2 },
            { label: "What is you name?", id: 3},
            { label: "Look at this!", id: 4},
            { label: "Yo bro!", id: 5}
        ]
}
    
export const dialogReducer = (state:dialogsStateType = initialState, action:dialogsType):dialogsStateType => {
  switch (action.type) {
    case ADD_MESSAGE_VALUE:
      return {
        ...state, newMessageText: action.text}
    case ADD_MESSAGE: {
      let newPost = { label: state.newMessageText, id: 34 };
      return {
        ...state,
        newMessageText: "",  
        messages:[...state.messages, newPost]
      }
      
    }
    default: {
      return state;
    }
  }
};