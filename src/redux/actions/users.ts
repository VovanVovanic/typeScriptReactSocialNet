
import { ThunkAction } from "redux-thunk";
import { followThisUser, getItems, noFollowThisUser } from "../../api/api";
import { UsersType } from "../reducers/users";
import { RootStateType } from "../reduxStore";
import {
  FOLLOW,
  NOFOLLOW,
  SET__USERS,
  SET__PAGE,
  SET__TOTAL,
  SET__PAGINATION,
  TOGGLE__PRELOADER,
  TOGGLE_FOLLOW_STATUS,
} from "./types";

type auxiliaryType<T> = T extends { [key: string]: infer actionType } ? actionType : never
export type usersActionType = ReturnType<auxiliaryType<typeof usersActions>>


export const usersActions = {
  followUser: (id: number) => {
    return { type: FOLLOW, id: id } as const;
  },
  nofollowUser: (id: number) => {
    return { type: NOFOLLOW, id: id } as const;
  },
  setUsers: (users: UsersType) => {
    return { type: SET__USERS, users: users } as const;
  },
  setPage: (page: number) => {
    return { type: SET__PAGE, page } as const;
  },
  setTotal: (total: number) => {
    return { type: SET__TOTAL, total } as const;
  },
  setPagination: (pagination: number) => {
    return { type: SET__PAGINATION, pagination } as const;
  },
  togglePreloader: (isFetching: boolean) => {
    return { type: TOGGLE__PRELOADER, isFetching } as const;
  },
  triggerFollowStatus: (isFetchingFollow: boolean, userId: number) => {
    return { type: TOGGLE_FOLLOW_STATUS, isFetchingFollow, userId } as const
  }
}


export const getUsers = (pageNumber: number): ThunkAction<void, RootStateType, unknown, usersActionType> => {
  return (dispatch) => {
    dispatch(usersActions.togglePreloader(true))
    getItems(pageNumber)
      .then((data) => {
        dispatch(usersActions.setTotal(data.totalCount));
        dispatch(usersActions.setUsers(data.items))
        dispatch(usersActions.togglePreloader(false))
      });
  }
}
export const followUser = (id: number): ThunkAction<void, RootStateType, unknown, usersActionType> => {
  return (dispatch) => {
    dispatch(usersActions.triggerFollowStatus(true, id));
    followThisUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(usersActions.followUser(id));
      }
      dispatch(usersActions.triggerFollowStatus(false, id));
    })
  }
}
export const nofollowUser = (id: number): ThunkAction<void, RootStateType, unknown, usersActionType> => {
  return (dispatch) => {
    dispatch(usersActions.triggerFollowStatus(true, id));
    noFollowThisUser(id).then((data) => {
      if (data.resultCode === 0) {
        dispatch(usersActions.nofollowUser(id));
      }
      dispatch(usersActions.triggerFollowStatus(false, id));
    })
  }
}
