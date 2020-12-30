import { connect } from "react-redux";
import {friendType } from "../../redux/reducers/sidebar";
import { RootStateType } from "../../redux/reduxStore";
import Navbar from "./Navbar";

type MapStatePropsType = {
  friendList: Array<friendType>;
};
let mapStateToProps = (state: RootStateType):MapStatePropsType => {
  return {
    friendList: state.sidebar.friendList,
  };
};
const NavbarContainer = connect<MapStatePropsType, {}, {}, RootStateType>(mapStateToProps)(Navbar);

export default NavbarContainer;
