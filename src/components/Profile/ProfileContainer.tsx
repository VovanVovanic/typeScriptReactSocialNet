import React, {ComponentType, useEffect } from "react";
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
  setNewPhoto
} from "../../redux/actions/myPosts";
import { ProfileType } from "../../redux/reducers/profile";

type MapStateType = {
  profile: ProfileType | null;
  status: string,
  authId: number | null
};
type MapDispatchType = {
  setProfileData: (id: string) => void;
  getStatus: (status: string) => void;
  setNewStatus: (status: string) => void;
  setNewPhoto: (ava: string | Blob)=> void
};
type PathParamsType = {
  userId: string
}
type OwnPropsType = MapStateType & MapDispatchType

type ProfileAPIPropsType = RouteComponentProps<PathParamsType> & OwnPropsType

const ProfileAPI: React.FC<ProfileAPIPropsType> = ({
  match,
  history,
  profile,
  authId,
  status,
  setProfileData,
  getStatus,
  setNewStatus,
  setNewPhoto,
}) => {
  let userId = match.params.userId;
  useEffect(() => {
    if (!userId) {
      userId = String(authId);
      if (!userId) {
        history.push("/login");
      }
    }
    setProfileData(userId);
    getStatus(userId);
  }, []);

  useEffect(() => {
    if (!userId) {
      userId = String(authId);
      if (!userId) {
        history.push("/login");
      }
    }
    setProfileData(userId);
    getStatus(userId);
  }, [userId]);

  return (
    <Profile
      profile={profile}
      status={status}
      setNewStatus={setNewStatus}
      isOwner={!userId}
      setNewPhoto={setNewPhoto}
    />
  );
};

let mapStateToProps = (state: RootStateType): MapStateType => {
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    authId: state.auth.id
  };
}


const ProfileContainer = compose<ComponentType>(
  connect<MapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {
    setProfileData,
    getStatus,
    setNewStatus,
    setNewPhoto
  }),
  withRouter,
  withAuthRedirect
)(ProfileAPI);
export default ProfileContainer;
