import React, { Component, ComponentType } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootStateType } from "../../redux/reduxStore";
import { ProfileType } from "../../redux/reducers/users";
import { setProfileData } from "../../redux/actions/users";
import { compose } from "redux";
import { withAuthRedirect } from "../hoc/authRedirect";


type MapStateType = {
  profile: ProfileType | null;
};
type MapDispatchType = {
  setProfileData: (id: string) => void;
};
type PathParamsType = {
  userId: string
}
type OwnPropsType = MapStateType & MapDispatchType

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileAPI extends Component<ProfileAPIPropsType> {
  componentDidMount() {
    this.props.setProfileData(this.props.match.params.userId)
  }
  render() {
    const { profile } = this.props;
    return <Profile profile={profile} />;
  }
}

let mapStateToProps = (state: RootStateType): MapStateType => {
  return {
    profile: state.users.profile,
  };
}


const ProfileContainer = compose<ComponentType>(
  connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {setProfileData}),
  withRouter,
  withAuthRedirect
)(ProfileAPI);
export default ProfileContainer;
