import React, { ChangeEvent, useState} from "react";
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ava from "../../assets/images/ava.gif";
import { ProfileType } from "../../redux/reducers/profile";
import ProfileStatus from "./ProfileStatus";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import { Redirect } from "react-router";
import ProfileInfo from "./profieInfo";
import EditProfileForm, { ProfileDataType } from "./editProfileForm";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string;
  setNewStatus: (status: string) => void;
  isOwner: boolean;
  setNewPhoto: (ava: string | Blob) => void;
  setUpdatedProfile: (data: ProfileDataType) => Promise<any>;
};

const Profile: React.FC<ProfilePropsType> = ({
  profile,
  status,
  setNewStatus,
  isOwner,
  setNewPhoto,
  setUpdatedProfile,
}) => {
  let isLogged = useSelector<RootStateType, boolean>(
    (state) => state.auth.isLogged
  );
  const [editMode, setEditMode] = useState<boolean>(false);

  if (!isLogged) {
    return <Redirect to="./login" />;
  }
  const onPhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewPhoto(e.target.files[0]);
    }
  };

  let isProfile = profile ? (
    <>
      <img
        src={!profile.photos.large ? ava : profile.photos.large}
        alt={"ava"}
      />
      {isOwner && <input type={"file"} onChange={onPhotoChange} />}
    </>
  ) : (
    ""
  );

  const onSubmit = (data: ProfileDataType) => {
    console.log(typeof setUpdatedProfile);
    setUpdatedProfile(data)
  };

  return (
    <div className={s.content}>
      <div>{isProfile}</div>
      <ProfileStatus status={status} setNewStatus={setNewStatus} />

      {editMode ? (
        <EditProfileForm initialValues={profile as Partial<ProfileDataType> | undefined} profile={profile} onSubmit={onSubmit} />
      ) : (
        <ProfileInfo
          profile={profile}
          isOwner={isOwner}
          onEditMode={() => setEditMode(true)}
        />
      )}
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
