import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Denny from "../../assets/images/Deineris.jpg";
import { ProfileType } from "../../redux/reducers/profile";
import ProfileStatus from "./ProfileStatus";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string
  setNewStatus: (status:string)=>void
};

const Profile: React.FC<ProfilePropsType> = ({ profile, status, setNewStatus }) => {
 
  let isProfile = profile ? (
    <>
      <img
        src={!profile.photos.large ? Denny : profile.photos.large}
        alt={"ava"}
      />
      <div>{profile.fullName}</div>
    </>
  ) : (
    ''
  );
  return (
    <div className={s.content}>
      <div>{isProfile}</div>
      <ProfileStatus status={status} setNewStatus={setNewStatus}/>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
