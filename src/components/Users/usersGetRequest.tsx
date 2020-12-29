import React from "react";
import Users from "./users";
import Preloader from "../Preloader/preloader";
import axios from "axios";
import { UsersType } from "../redux/reducers/users";

type PropsType = {
  users: UsersType;
  pages: number;
  initialPage: number;
  isFetching: boolean; //
  total: number;
  pagination: number;
  followUser: (id: number) => void
  nofollowUser: (id: number) => void;
  setPagination: (pagination: number) => void
  setUsers: (users: UsersType) => void //
  setPage: (page: number) => void //
  setTotal: (page: number) => void//
  togglePreloader: (isFetching: boolean) => void///
};

export default class UsersGetRequest extends React.Component<PropsType> {
  onPreloader = this.props.togglePreloader;
  getUsers = (pageNumber:number) => {
    this.onPreloader(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=5`,{withCredentials:true}
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.onPreloader(false);
      });
  };
  getTotal = () => {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users",{withCredentials:true})
      .then((response) => {
        this.props.setTotal(response.data.totalCount);
      });
  };
  componentDidMount() {
    this.getUsers(this.props.initialPage);
    this.getTotal();
  }

  render() {
    const { setPage, isFetching, togglePreloader, ...usersProps } = this.props;
    const onPageSet = (page:number) => {
      setPage(page);
      this.getUsers(page);
    };

    let loadedContent = isFetching ? (
      <Preloader />
    ) : (
      <Users onPageSet={onPageSet} {...usersProps} />
    );

    return loadedContent;
  }
}
