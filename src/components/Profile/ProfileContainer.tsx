import React, { Component, ComponentType } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/authRedirect";
import {
  getStatus,
  setProfileData,
  setNewStatus,
} from "../../redux/actions/myPosts";
import { ProfileType } from "../../redux/reducers/profile";

type MapStateType = {
  profile: ProfileType | null;
  status: string
};
type MapDispatchType = {
  setProfileData: (id: string) => void;
  getStatus: (status: string) => void;
  setNewStatus: (status: string)=> void
};
type PathParamsType = {
  userId: string
}
type OwnPropsType = MapStateType & MapDispatchType

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileAPI extends Component<ProfileAPIPropsType> {
  componentDidMount() {
  let userId = this.props.match.params.userId
    if (!userId) {
      userId = String(this.props.profile?.userId)
      if(!userId){this.props.history.push('/login')}
    }
  this.props.setProfileData(userId)
  this.props.getStatus(userId);
  }
  render() {
    const { profile, status } = this.props;
    return <Profile profile={profile} status={status} setNewStatus={ this.props.setNewStatus}/>;
  }
}

let mapStateToProps = (state: RootStateType): MapStateType => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
  };
}


const ProfileContainer = compose<ComponentType>(
  connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {
    setProfileData,
    getStatus,
    setNewStatus
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPI);
export default ProfileContainer;
