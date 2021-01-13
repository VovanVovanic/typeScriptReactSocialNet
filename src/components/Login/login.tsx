import React from 'react'
import LoginForm, { LoginDataType } from './loginForm'
const Login = () => {
  const onSubmitData = (formData: LoginDataType) => {
    console.log(formData);
  };
  return (
    <>
      <h2>Login</h2>
      <LoginForm onSubmit={onSubmitData}/>
    </>
  );
}
export default Login