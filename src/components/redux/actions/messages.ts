
import {ADD_MESSAGE, ADD_MESSAGE_VALUE} from "./types";


export type onMessageFormSubmitType = {
  type: 'ADD_MESSAGE'
}
export type onMessageTextChangeActionType = {
  type: 'ADD_MESSAGE_VALUE'
  text: string
}
export type dialogsType = onMessageFormSubmitType | onMessageTextChangeActionType

export const onMessageFormSubmit = ():onMessageFormSubmitType=> {
    return { type: ADD_MESSAGE }
}
export const onMessageTextChangeAction = (text:string):onMessageTextChangeActionType=>{
    return { type: ADD_MESSAGE_VALUE, text: text }
}