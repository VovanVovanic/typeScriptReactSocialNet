import React, { useEffect } from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ava from "../../assets/images/ava.gif";
import { ProfileType } from "../../redux/reducers/profile";
import ProfileStatus from "./ProfileStatus";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import { Redirect } from "react-router";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string
  setNewStatus: (status:string)=>void
};

const Profile: React.FC<ProfilePropsType> = ({ profile, status, setNewStatus }) => {
  let isLogged = useSelector<RootStateType, boolean>((state) => state.auth.isLogged)
    if (!isLogged) {
      return <Redirect to='./login' />
    }
    
  let isProfile = profile ? (
    <>
      <img
        src={!profile.photos.large ? ava : profile.photos.large}
        alt={"ava"}
      />
      <div>{profile.fullName}</div>
    </>
  ) : (
    ''
    );
  
  let keys =profile && (Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>);
  let socials = keys?.map((el) => {
    return (
      <li key={el}>
        {el}
        </li>
      )
    })
  
  return (
    <div className={s.content}>
      <div>{isProfile}</div>
      <ProfileStatus status={status} setNewStatus={setNewStatus} />
      <div>{profile?.fullName}</div>
      <div>{profile?.lookingForAJob}</div>
      <div>{profile?.lookingForAJobDescription}</div>
      <ul>{socials}</ul>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
