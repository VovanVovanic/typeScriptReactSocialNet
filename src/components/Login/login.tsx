import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/actions/auth';
import { RootStateType } from '../../redux/reduxStore';
import LoginForm, { LoginDataType } from './loginForm'

type MapDispatchType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: null | string) => void;
};
type LoginMapStateType = {
  isLogged: boolean
  captcha: null | string
}


const Login: React.FC<LoginMapStateType & MapDispatchType> = ({login,isLogged, captcha}) => {
  const onSubmitData = (formData: LoginDataType) => {
    login(formData.email, formData.password, formData.rememberMe, formData.captcha = null);
  };

  if (isLogged) {
    return <Redirect to={'/profile'}/>
 }
  return (
    <>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmitData} captcha={captcha}/>
    </>
  )
};

const mapStateToProps = (state: RootStateType): LoginMapStateType => {
  return {
    isLogged: state.auth.isLogged,
    captcha: state.auth.captcha
  };
  
}
export default connect<LoginMapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {login})(Login)