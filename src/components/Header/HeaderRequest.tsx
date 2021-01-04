
import React, { Component } from "react";
import Header from "./Header";
import { AuthDispatchType, AuthMapStateTypes } from "./HeaderContainer";

type PropsType = AuthMapStateTypes & AuthDispatchType;
class HeaderRequest extends Component<PropsType> {

  componentDidMount() {
    this.props.getUserData()
  }
  render() {
    const { getUserData, ...headerProps } = this.props;
    return <Header {...headerProps} />;
  }
}
export default HeaderRequest