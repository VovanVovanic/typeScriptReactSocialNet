
import { connect } from "react-redux";
import { followUserType, noFollowUserType, setPageType, setPaginationType, setTotalType, setUsersType, togglePreloaderType, usersActions}from "../redux/actions/users";
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
  followUser: (id: number) => followUserType
  nofollowUser: (id: number) => noFollowUserType
  setUsers: (users: UsersType) => setUsersType
  setPage: (page: number) => setPageType
  setTotal: (page: number) => setTotalType
  setPagination: (pagination: number) => setPaginationType
  togglePreloader: (isFetching:boolean)=>togglePreloaderType
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

