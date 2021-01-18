import React from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { login } from '../../redux/actions/auth';
import { RootStateType } from '../../redux/reduxStore';
import LoginForm, { LoginDataType } from './loginForm'

type MapDispatchType = {
  login: (email: string, password: string, rememberMe: boolean) => void;
};
type LoginMapStateType = {
  isLogged: boolean
}


const Login: React.FC<LoginMapStateType & MapDispatchType> = ({login,isLogged}) => {
  const onSubmitData = (formData: LoginDataType) => {
    login(formData.email, formData.password, formData.rememberMe);
  };

  if (isLogged) {
    return <Redirect to={'/profile'}/>
 }
  return (
    <>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmitData} />
    </>
  )
};

const mapStateToProps = (state: RootStateType): LoginMapStateType => {
  return {
    isLogged: state.auth.isLogged,
  };
  
}
export default connect<LoginMapStateType, MapDispatchType, {}, RootStateType>(mapStateToProps, {login})(Login)