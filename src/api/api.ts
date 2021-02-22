
import axios from 'axios'
import { dataType } from '../redux/reducers/auth'
import { ProfileType } from '../redux/reducers/profile'
import { UsersType } from '../redux/reducers/users'

let instance = axios.create({
baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "ab1b860e-9865-4320-8135-23abb9a648e8",
  },
})

type CommonResponseType<D> = {
  resultCode: number
  messages: Array<string>
  data: D
}

type GetItemsResponseType = {
  items: UsersType
  totalCount: number
  error: null | string
}



export const getItems = (pageNumber: number) => {
  return instance.get<GetItemsResponseType>(`users?page=${pageNumber}&count=5`).then(response => response.data)
}
  
export const followThisUser = (id: number) => {
  return instance.post<CommonResponseType<{}>>(`follow/${id}`).then(response => response.data)
}
export const noFollowThisUser = (id: number) => {
  return instance.delete<CommonResponseType<{}>>(`follow/${id}`).then(response => response.data)
}
export const getThisUser = (id: string) => {
  return instance.get<ProfileType>(`profile/${id}`).then(response => response.data)
}
export const authMe = () => {
  return instance.get<CommonResponseType<dataType>>(`auth/me`).then(response => response.data)
}
export const getThisStatus = (id: string) => {
  return instance.get(`profile/status/${id}`).then(response => response.data)
}
export const updateThisStatus = (status: string) => {
  return instance.put<CommonResponseType<Object>>(`profile/status/`,{status}).then(response => response.data)
}
export const loginMe = (email: string, password: string, rememberMe: boolean = false) => {
  return instance.post<CommonResponseType<{userId:number}>>(`/auth/login/`,{email, password, rememberMe}).then(response => response.data)
}
export const logoffMe = () => {
  return instance.delete<CommonResponseType<{}>>(`/auth/login/`).then(response => response.data)
}