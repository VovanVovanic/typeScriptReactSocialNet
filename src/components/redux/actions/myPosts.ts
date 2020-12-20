
import {ADD_POST, ADD_POST_VALUE} from "./types";


export type onPostAddedActionType = {
  type: 'ADD_POST'
}
export type onInputValueActionType = {
  type: 'ADD_POST_VALUE'
  text: string
}

export type profileActionsTypes = onPostAddedActionType | onInputValueActionType
export const onPostAddedAction =():onPostAddedActionType => {
    return { type: ADD_POST };
}

export const onInputValueAction = (text:string):onInputValueActionType=> {
    return { type: ADD_POST_VALUE, text: text }
}
