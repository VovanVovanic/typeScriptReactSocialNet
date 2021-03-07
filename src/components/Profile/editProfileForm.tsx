import classes from './profile.module.scss';
import { Button, Col, Row } from 'antd';
import Title from 'antd/lib/typography/Title';
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ProfileType } from '../../redux/reducers/profile'
import { Input, TextArea } from '../common/formControls';

 type ProfileFormType = {
  profile: ProfileType | null
}
export type ProfileDataType = {
  FullName: string;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  AboutMe: string
  contacts: {
    facebook: string
    vk: string
    website: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
  }
};
const ProfileForm: React.FC<ProfileFormType & InjectedFormProps<ProfileDataType, ProfileFormType>> = ({ profile, handleSubmit, error }) => {
      let keys = profile && (Object.keys(profile.contacts) as Array<keyof typeof profile.contacts>);
    let socials = keys?.map((el) => {
      return (
        <li key={el}>
          {el}: <Field component={Input} name={`contacts.${el}`} />
          {error && error.toLowerCase() === el.toLowerCase() && <div>{`${error} field error: Url must be in format "https://${error.toLowerCase()}..."`}</div>}
        </li>
      );
    });
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col span={18} style={{ textAlign: "center" }}>
          <Title level={2} style={{ color: "wheat" }}>
            Set new info
          </Title>
        </Col>
        <Col span={6} style={{ justifyContent: "flex-end", display: "flex" }}>
        <button type="submit" className={classes.submitBtn}>Save</button>
        </Col>
      </Row>

      <div>
        Name:
        <Field component={Input} name="fullName" validate={[]} />
      </div>
      <div>
        Looking for a job:
        <Field
          component={Input}
          name="lookingForAJob"
          type={"checkbox"}
          validate={[]}
        />
      </div>
      <div>
        Job description:
        <Field
          component={TextArea}
          name="lookingForAJobDescription"
          validate={[]}
        />
      </div>
      <div>
        Job description:
        <Field component={TextArea} name="aboutMe" validate={[]} />
      </div>
      <div>
        Contacts:
        <ul>{socials}</ul>
      </div>
    </form>
  );
};
const EditProfileForm = reduxForm<ProfileDataType, ProfileFormType>({
  form: "myProfileForm",
})(ProfileForm);
export default EditProfileForm