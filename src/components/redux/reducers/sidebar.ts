
export type friendType = {
  label:string
}
export type friendsType = Array<friendType>

export type friendsStateType = {
  friendList: friendsType
}
const initialState:friendsStateType = {
    friendList: [
        { label: 'Andrew' },
        { label: 'Sasha' },
        {label: 'Sveta'}
    ]
}
export const sidebarReducer = (state:friendsStateType = initialState, action:any):friendsStateType=> {
    return state
}