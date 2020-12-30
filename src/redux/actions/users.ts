
import { ProfileType, UsersType } from "../reducers/users";
import {
  FOLLOW,
  NOFOLLOW,
  SET__USERS,
  SET__PAGE,
  SET__TOTAL,
  SET__PAGINATION,
  TOGGLE__PRELOADER,
  SET__PROFILE,
  TOGGLE_FOLLOW_STATUS,
} from "./types";

type auxiliaryType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type usersActionType = ReturnType<auxiliaryType<typeof usersActions>>

// export type followUserType = ReturnType<typeof usersActions.followUser>
// export type noFollowUserType = ReturnType<typeof usersActions.nofollowUser>
// export type setUsersType = ReturnType<typeof usersActions.setUsers>
// export type setPageType = ReturnType<typeof usersActions.setPage>
// export type setTotalType = ReturnType<typeof usersActions.setTotal>
// export type setPaginationType = ReturnType<typeof usersActions.setPagination>
// export type togglePreloaderType = ReturnType<typeof usersActions.togglePreloader>
// export type setProfileType = ReturnType<typeof usersActions.setProfile>

export const usersActions = {
followUser: (id:number) => {
  return { type: FOLLOW, id: id} as const;
},
nofollowUser: (id:number) => {
  return { type: NOFOLLOW, id: id } as const;
},
setUsers: (users: UsersType) => {
  return { type: SET__USERS, users:users } as const;
},
setPage: (page: number) => {
  return { type: SET__PAGE, page } as const;
},
setTotal: (total: number) => {
  return { type: SET__TOTAL, total } as const;
},
setPagination: (pagination: number) => {
  return { type: SET__PAGINATION, pagination} as const;
},
togglePreloader: (isFetching:boolean) => {
  return { type: TOGGLE__PRELOADER, isFetching } as const;
},
setProfile: (profile: ProfileType) => {
  return { type: SET__PROFILE, profile} as const;
  },
triggerFollowStatus:(isFetchingFollow:boolean, userId:number) => {
  return{type: TOGGLE_FOLLOW_STATUS, isFetchingFollow, userId} as const
}
}
