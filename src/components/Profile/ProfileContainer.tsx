import React, { Component } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { usersActions} from "../redux/actions/users";
import { RouteComponentProps, withRouter } from "react-router-dom";
import axios from "axios";
import { RootStateType } from "../redux/reduxStore";
import { ProfileType } from "../redux/reducers/users";

const{setProfile} = usersActions

type MapStateType = {
  profile: ProfileType | null;
};
type MapDispatchType = {
  setProfile: (profile: ProfileType) => void
};
type PathParamsType = {
  userId: string
}
type OwnPropsType = MapStateType & MapDispatchType

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileAPI extends Component<ProfileAPIPropsType> {
  componentDidMount() {
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/profile/${this.props.match.params.userId}/`
      )
      .then((response) => {
        this.props.setProfile(response.data);
      });
  }
  render() {
    const { profile } = this.props;
    return <Profile profile={profile} />;
  }
}

let mapStateToProps = (state: RootStateType):MapStateType => {
  return {
    profile: state.users.profile,
  };
};

const ProfileContainer = connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, { setProfile })(withRouter(ProfileAPI));
export default ProfileContainer;
