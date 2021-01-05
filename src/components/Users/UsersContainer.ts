import { ComponentType } from 'react';

import { connect } from "react-redux";
import { compose } from "redux";
import { usersActions, getUsers, followUser, nofollowUser,}from "../../redux/actions/users";
import { UsersType } from "../../redux/reducers/users";
import { RootStateType } from "../../redux/reduxStore";
import { withAuthRedirect } from "../hoc/authRedirect";
import UsersGetRequest from "./usersGetRequest";

const {setPage,setPagination} = usersActions


export type MapStateType = {
  users: UsersType
  pages: number
  initialPage: number
  total: number
  pagination: number
  isFetching: boolean
  followInProgress: Array<number>
}
export type MapDispatchType = {
  followUser: (id: number) => void
  nofollowUser: (id: number) => void
  setPage: (page: number) => void
  getUsers: (page: number) => void
  setPagination: (pagination: number) => void
}
let mapStateToProps = (state: RootStateType):MapStateType => {
  return {
    users: state.users.users,
    pages: state.users.pageCount,
    initialPage: state.users.initialPage,
    total: state.users.total,
    pagination: state.users.initialPagination,
    isFetching: state.users.isFetching,
    followInProgress: state.users.followInProgress
  };
}


const UsersContainer = compose<ComponentType>(
 connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {
  followUser,
  nofollowUser,
  setPage,
  getUsers,
  setPagination,
}),
  withAuthRedirect
)(UsersGetRequest)
export default UsersContainer

