import { PoweroffOutlined } from '@ant-design/icons';
import { Alert, Avatar, Button, Row } from 'antd';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoff } from '../../redux/actions/auth';
import { authStateType } from '../../redux/reducers/auth';
import { RootStateType } from '../../redux/reduxStore';
import Preloader from '../Preloader/preloader';

const HeaderLogo = () => {
  const dispatch = useDispatch()
  const authDates = useSelector<RootStateType, authStateType>((state) => state.auth);
  const {isLogged, isFetching} = authDates
  const onLogout = () => { dispatch(logoff()); };
  
  let userAvatar = isLogged ? (
    <>
      <Avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        style={{ marginRight: "30px" }}
      />
      <Button
        type="primary"
        danger
        icon={<PoweroffOutlined />}
        onClick={onLogout}
      >
        Logout
      </Button>
    </>
  ) : (
    <Alert message="You are not authorised" type="warning" />
  );
  let loginContent = isFetching ? <Preloader /> : userAvatar;
  return (

  <Row justify='end' align='middle' style={{height: "100%"}}>{loginContent}</Row>
  );
};

export default HeaderLogo;

        