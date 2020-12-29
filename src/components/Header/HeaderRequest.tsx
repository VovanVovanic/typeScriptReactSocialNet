
import axios from "axios";
import React, { Component } from "react";
import Header from "./Header";
import { AuthDispatchType, AuthMapStateTypes } from "./HeaderContainer";

type PropsType = AuthMapStateTypes & AuthDispatchType;
class HeaderRequest extends Component<PropsType> {
 
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0//auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        if (response.data.resultCode === 0) {
          this.props.setUserData(response.data.data);
              axios.get(
                `https://social-network.samuraijs.com/api/1.0/profile/${response.data.data.id}/`
              ).then((response) => {
                console.log(response.data.photos.small);
                
              })
        }
      });
  }
  render() {
   const {setUserData, ...headerProps} = this.props
    return <Header {...headerProps}/>;
  }
}
export default HeaderRequest