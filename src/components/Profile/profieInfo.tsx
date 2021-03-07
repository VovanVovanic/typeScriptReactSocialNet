import classes from './profile.module.scss';
import { Avatar, Button, Col, Row, Typography } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react'
import { ProfileType } from '../../redux/reducers/profile'

type ProfileInfoTypes = {
  profile: ProfileType | null
  isOwner: boolean
  onEditMode: () => void
}
const ProfileInfo: React.FC<ProfileInfoTypes> = ({ profile, isOwner, onEditMode }) => {

  let icons = [
    "https://www.flaticon.com/svg/vstatic/svg/174/174848.svg?token=exp=1615116821~hmac=ce3a4d12d3b7e6424ba13eb78a48df5a",
    "https://www.flaticon.com/svg/vstatic/svg/148/148798.svg?token=exp=1615117084~hmac=078035593addf26da48a95b4ba4d1348",
    "https://www.flaticon.com/svg/vstatic/svg/145/145813.svg?token=exp=1615117142~hmac=2fd61506319c3e91f5bf51950b984352",
    "https://www.flaticon.com/svg/vstatic/svg/145/145812.svg?token=exp=1615117179~hmac=0393be8199452249ae25d771542c25d3",
    "https://www.flaticon.com/svg/vstatic/svg/1384/1384063.svg?token=exp=1615117262~hmac=675e64cb2fe1809c132fbe750f6df1c2",
    "https://www.flaticon.com/svg/vstatic/svg/1384/1384060.svg?token=exp=1615117306~hmac=5f589a78aa59f050a0f4ef289c5bbecd",
    "https://www.flaticon.com/svg/vstatic/svg/733/733553.svg?token=exp=1615117346~hmac=d1818f763998f6b8f3b9b76415ce6428",
    "https://www.flaticon.com/svg/vstatic/svg/1946/1946433.svg?token=exp=1615117414~hmac=67f159f2a05f1e3c209a567fd48a8115",
  ];
  let keys = profile && (Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>);

  let socials = keys?.map((el, i) => {
    return { name: el, ava: icons[i] };
  }).map((el) => {
    let isSocial = profile?.contacts[el.name] !== null ? profile?.contacts[el.name] : "";
    return (
      <Col key={el.name} span={12} className={classes.socialItem}>
        <a href={isSocial as any} target={"_blank"} className={classes.link}>
          <Button
            type="default"
            disabled={!isSocial}
            className={classes.btn}
            icon={<Avatar src={el.ava} />}
          />
        </a>
      </Col>
    );
  })
  return (
    <Typography >
      <Row>
        <Col span={20} style={{ textAlign: "center" }}>
          <Title level={2} style={{color: 'wheat'}}>Profile info</Title>
        </Col>
        <Col span={4} style={{ justifyContent: "flex-end", display: "flex" }}>
          {isOwner && (
            <Button onClick={() => onEditMode()} type="primary">
              Edit Profile
            </Button>
          )}
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <Title level={4} style={{color: 'wheat'}}>General:</Title>
          <Row className={classes.infoItem}>
            <Col className={classes.infoName}span={10}> Name:</Col>
            <Col className={classes.infoDescr} span={8}>{profile?.fullName}</Col>
          </Row>
          <Row className={classes.infoItem}>
            <Col className={classes.infoName}span={10}> Looking for a job:</Col>
            <Col className={classes.infoDescr} span={8}>{profile?.lookingForAJob ? "Yes" : "No"}</Col>
          </Row>
          <Row className={classes.infoItem}>
            <Col className={classes.infoName} span={10}> Job description:</Col>
            <Col className={classes.infoDescr} span={8}>{profile?.lookingForAJobDescription}</Col>
          </Row>
          <Row className={classes.infoItem}>
            <Col className={classes.infoName}span={10}> AboutMe:</Col>
            <Col className={classes.infoDescr} span={8}>{profile?.aboutMe}</Col>
          </Row>
        </Col>
        <Col span={12}>
          <Title level={4} style={{color: 'wheat'}}>Contacts:</Title>
          <Row justify='space-between' gutter={4}>
            {socials}
          </Row>
        </Col>
      </Row>
    </Typography>
  );
}
export default ProfileInfo