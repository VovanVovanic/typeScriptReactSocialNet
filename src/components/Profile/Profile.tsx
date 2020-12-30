import React from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Preloader/preloader";
import Denny from "../../assets/images/Deineris.jpg";
import { ProfileType } from "../../redux/reducers/users";

type ProfilePropsType = {
  profile: ProfileType | null;
};

const Profile: React.FC<ProfilePropsType> = ({ profile }) => {
  let isProfile = profile ? (
    <>
      <img
        src={!profile.photos.large ? Denny : profile.photos.large}
        alt={"ava"}
      />
      <div>{profile.fullName}</div>
    </>
  ) : (
    <Preloader />
  );
  return (
    <div className={s.content}>
      <div>
        <img src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" />
      </div>
      <div>{isProfile}</div>
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
