import { dataType } from "../reducers/auth";
import { SET_USER_DATA } from "./types";

export type setUserDataType = ReturnType<typeof setUserData>

export const setUserData =(data:dataType) => {
    return { type: SET_USER_DATA, data } as const;
}
