
export type friendType = {
  label:string
}
export type friendsType = Array<friendType>

export type friendsStateType = typeof initialState
const initialState = {
    friendList: [
        { label: 'Andrew' },
        { label: 'Sasha' },
        {label: 'Sveta'}
    ]
}
export const sidebarReducer = (state:friendsStateType = initialState, action:any):friendsStateType=> {
    return state
}