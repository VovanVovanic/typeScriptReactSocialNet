
import React, { Component } from "react";
import Header from "./Header";
import { AuthDispatchType, AuthMapStateTypes } from "./HeaderContainer";

type PropsType = AuthMapStateTypes & AuthDispatchType;
class HeaderRequest extends Component<PropsType> {


  render() {
    const { ...headerProps } = this.props;
    return <Header {...headerProps} />;
  }
}
export default HeaderRequest