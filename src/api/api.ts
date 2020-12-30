import axios from 'axios'

let instance = axios.create({
baseURL:`https://social-network.samuraijs.com/api/1.0/`,
  withCredentials: true,
  headers: {
    "API-KEY": "44ea4853-9f85-442f-ae33-04c415e0ca20",
  },
})

export const getItems = (pageNumber: number) => {
  return instance.get(`users?page=${pageNumber}&count=5`).then(response => response.data)
}
  
export const followThisUser = (id: number) => {
  return instance.post(`follow/${id}`).then(response => response.data)
}
export const noFollowThisUser = (id: number) => {
  return instance.delete(`follow/${id}`).then(response => response.data)
}
export const getThisUser = (id: string) => {
  return instance.get(`profile/${id}`).then(response => response.data)
}
export const authMe = () => {
  return instance.get(`auth/me`).then(response => response.data)
}