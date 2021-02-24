import React from 'react'
import { ProfileType } from '../../redux/reducers/profile'

type ProfileInfoTypes = {
  profile: ProfileType | null
  isOwner: boolean
  onEditMode: ()=>void
}
const ProfileInfo: React.FC<ProfileInfoTypes> = ({ profile, isOwner, onEditMode }) => {
   
    let keys = profile && (Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>);
  let socials = keys?.map((el) => {
      let isSocial = profile?.contacts[el] !== null ? profile?.contacts[el] :''
      return <li key={el}>{`${el}: ${isSocial}`}</li>;
    });
  
  return (
    <>
      {isOwner && <button onClick={() => onEditMode()}>Edit Profile</button>}
      <div>Name: {profile?.fullName}</div>
      <div>Looking for a job: {profile?.lookingForAJob ? "Yes" : "No"}</div>
      <div>Job description: {profile?.lookingForAJobDescription}</div>
      <div>AboutMe: { profile?.aboutMe}</div>
      <div>
        Contacts:
        <ul>{socials}</ul>
      </div>
    </>
  );
}
export default ProfileInfo