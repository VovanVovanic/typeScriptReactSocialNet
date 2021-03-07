import React, {  useState} from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ava from "../../assets/images/ava.gif";
import { ProfileType } from "../../redux/reducers/profile";
import ProfileStatus from "./ProfileStatus";
import { useSelector } from "react-redux";
import { RootStateType } from "../../redux/reduxStore";
import { Redirect } from "react-router";
import ProfileInfo from "./profieInfo";
import EditProfileForm, { ProfileDataType } from "./editProfileForm";
import { Button, Card,Upload, Row, Col } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { UploadChangeParam } from "antd/lib/upload";
import { UploadFile } from "antd/lib/upload/interface";
import classes from "./profile.module.scss";

type ProfilePropsType = {
  profile: ProfileType | null;
  status: string;
  setNewStatus: (status: string) => void;
  isOwner: boolean;
  setNewPhoto: (ava: UploadFile<any>) => void;
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
  const onPhotoChange = (info: UploadChangeParam<UploadFile<any>>) => {
    setNewPhoto(info.file);
    if(info.file.status === 'error'){return}
  };

  let isProfile = profile ? (
    <Card
      hoverable
      style={{ width: 240 }}
      cover={<img alt="ava"
          src={!profile.photos.large ? ava : profile.photos.large}/>}>
      <div style={{textAlign: 'center'}}>
        {isOwner && (
          <Upload name="file" onChange={onPhotoChange}>
            <Button icon={<UploadOutlined />}>Upload avatar</Button>
          </Upload>
          
        )}
      </div>
    </Card>
  ) : (
    ""
  );

  const onSubmit = (data: ProfileDataType) => {

    setUpdatedProfile(data)
  };

  return (
    <>
      <Row className={classes.profileWrap}>
        <Col span={7}>{isProfile}</Col>
        <Col span={17}>
          {editMode ? (
            <EditProfileForm
              initialValues={profile as Partial<ProfileDataType> | undefined}
              profile={profile}
              onSubmit={onSubmit}
            />
          ) : (
            <ProfileInfo
              profile={profile}
              isOwner={isOwner}
              onEditMode={() => setEditMode(true)}
            />
          )}
        </Col>
      </Row>

      <ProfileStatus status={status} setNewStatus={setNewStatus}/>

      <MyPostsContainer />
    </>
  );
};

export default Profile;
