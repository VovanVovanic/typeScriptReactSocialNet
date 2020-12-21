import {
  FOLLOW,
  NOFOLLOW,
  SET__PAGE,
  SET__USERS,
  SET__TOTAL,
  SET__PAGINATION,
  TOGGLE__PRELOADER,
  SET__PROFILE,
} from "../actions/types";
import { usersActionType } from "../actions/users";


export type PhotosType = {
  small: null | string
  large: null | string
}
export type UserType = {
  id: number
  name: string
  photos: PhotosType
  status: null | string
  followed: boolean
}
export type UsersType = Array<UserType>

export type ContactsType = {
  facebook: null | string
  website: null | string
  vk: null | string
  twitter: null | string
  instagram: null | string
}
export type ProfileType = {
  userId: number
  aboutMe: null | string
  contacts: ContactsType
  fullName: string
  lookingForAJob: false
  lookingForAJobDescription: null | string
  photos: PhotosType
}
export type UsersStateType = typeof initialState
const initialState = {
  users: [] as UsersType,
  pageCount: 5,
  initialPage: 1,
  total: 0,
  initialPagination: 0,
  isFetching: false,
  profile: null as ProfileType | null
};

export const usersReducer = (state:UsersStateType = initialState, action:usersActionType):UsersStateType => {
  switch (action.type) {
    case FOLLOW:
      let stateCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            el.followed = true;
            return el;
          }
          return el;
        }),
      };
      return stateCopy;
    case NOFOLLOW:
      let stateNewCopy = {
        ...state,
        users: state.users.map((el) => {
          if (el.id === action.id) {
            el.followed = false;
            return el;
          }
          return el;
        }),
      };
      return stateNewCopy;
    case SET__PAGE:
      return { ...state, initialPage: action.page };
    case SET__TOTAL:
      return { ...state, total: action.total };
    case SET__PAGINATION:
      return { ...state, initialPagination: action.pagination };
    case SET__USERS:
      return { ...state, users: [...action.users] };
    case TOGGLE__PRELOADER:
      return {...state, isFetching: action.isFetching}
    case SET__PROFILE:
      return { ...state, profile: action.profile }
    default:
      return state;
  }
}


