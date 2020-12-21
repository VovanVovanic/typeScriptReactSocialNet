
import {ADD_MESSAGE, ADD_MESSAGE_VALUE} from "./types";


export type onMessageFormSubmitType = ReturnType<typeof onMessageFormSubmit>
export type onMessageTextChangeActionType = ReturnType<typeof onMessageTextChangeAction>

export type dialogsType = onMessageFormSubmitType | onMessageTextChangeActionType

export const onMessageFormSubmit = () => {
    return { type: ADD_MESSAGE } as const
}
export const onMessageTextChangeAction = (text:string)=>{
    return { type: ADD_MESSAGE_VALUE, text: text } as const
}
