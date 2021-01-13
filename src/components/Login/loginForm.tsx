import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'

export type LoginDataType = {
  Login: string
  Password: string
  RememberMe: boolean
}
const LoginF:React.FC<InjectedFormProps<LoginDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Login" component="input" name='Login' type="text" />
      </div>
      <div>
        <Field placeholder="Password" component="input" name='Password' type="password" />
      </div>
      <div>
        <Field  component="input" type="checkbox" name='RememberMe' /> Remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
}
const LoginForm = reduxForm<LoginDataType>({
  form: 'login'
})(LoginF)
export default LoginForm