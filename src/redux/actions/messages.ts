
import {ADD_MESSAGE} from "./types";


export type onMessageFormSubmitType = ReturnType<typeof onMessageFormSubmit>


export type dialogsType = onMessageFormSubmitType 

export const onMessageFormSubmit = (value: string) => {
    return { type: ADD_MESSAGE, value } as const
}

