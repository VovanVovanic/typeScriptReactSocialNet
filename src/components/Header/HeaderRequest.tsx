
import React, { Component } from "react";
import { authMe, getThisUser } from "../../api/api";
import Header from "./Header";
import { AuthDispatchType, AuthMapStateTypes } from "./HeaderContainer";

type PropsType = AuthMapStateTypes & AuthDispatchType;
class HeaderRequest extends Component<PropsType> {

  componentDidMount() {
    authMe()
      .then((data) => {
        if (data.resultCode === 0) {
          this.props.setUserData(data.data);
          getThisUser(data.data.id).then((data) => {
            console.log(data.photos.small);
          });
        }
      });
  }
  render() {
    const { setUserData, ...headerProps } = this.props
    return <Header {...headerProps} />;
  }
}
export default HeaderRequest