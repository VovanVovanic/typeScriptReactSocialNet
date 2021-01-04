import React from "react";
import Users from "./users";
import Preloader from "../Preloader/preloader";
import { UsersType } from "../../redux/reducers/users";

type PropsType = {
  users: UsersType;
  pages: number;
  initialPage: number;
  isFetching: boolean; //
  total: number;
  pagination: number;
  followUser: (id: number) => void;
  nofollowUser: (id: number) => void;
  setPagination: (pagination: number) => void;//
  setPage: (page: number) => void; //
  getUsers: (page: number) => void; //
  followInProgress: Array<number>;
};

export default class UsersGetRequest extends React.Component<PropsType> {

  componentDidMount() {
    this.props.getUsers(this.props.initialPage);
  }

  render() {
    const { setPage, isFetching,  ...usersProps } = this.props;
    const onPageSet = (page: number) => {
      setPage(page);
      this.props.getUsers(page);
    };

    let loadedContent = isFetching ? (
      <Preloader />
    ) : (
      <Users onPageSet={onPageSet} {...usersProps} />
    );

    return loadedContent;
  }
}
