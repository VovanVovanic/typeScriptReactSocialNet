
import {ADD_POST, ADD_POST_VALUE} from "./types";


export type onPostAddedActionType =ReturnType<typeof onPostAddedAction>
export type onInputValueActionType = ReturnType<typeof onInputValueAction>

export type profileActionsTypes = onPostAddedActionType | onInputValueActionType

export const onPostAddedAction =() => {
    return { type: ADD_POST } as const;
}
export const onInputValueAction = (text:string)=> {
    return { type: ADD_POST_VALUE, text } as const
}
