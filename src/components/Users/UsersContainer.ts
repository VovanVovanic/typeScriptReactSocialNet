
import { connect } from "react-redux";
import { usersActions}from "../redux/actions/users";
import { UsersType } from "../redux/reducers/users";
import { RootStateType } from "../redux/reduxStore";
import UsersGetRequest from "./usersGetRequest";

const {
  followUser,
  nofollowUser,
  setUsers,
  setPage,
  setTotal,
  setPagination,
  togglePreloader} = usersActions


export type MapStateType = {
  users: UsersType
  pages: number
  initialPage: number
  total: number
  pagination: number
  isFetching: boolean
}
export type MapDispatchType = {
  followUser: (id: number) => void
  nofollowUser: (id: number) => void
  setUsers: (users: UsersType) => void
  setPage: (page: number) => void
  setTotal: (page: number) => void
  setPagination: (pagination: number) => void
  togglePreloader: (isFetching:boolean)=>void
}
let mapStateToProps = (state: RootStateType):MapStateType => {
  return {
    users: state.users.users,
    pages: state.users.pageCount,
    initialPage: state.users.initialPage,
    total: state.users.total,
    pagination: state.users.initialPagination,
    isFetching: state.users.isFetching
  };
}

const UsersContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {
  followUser,
  nofollowUser,
  setUsers,
  setPage,
  setTotal,
  setPagination,
  togglePreloader,
})(UsersGetRequest);
export default UsersContainer

