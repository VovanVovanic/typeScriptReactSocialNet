import classes from './form.module.css';
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators';
import { Input } from '../common/formControls';

export type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
}
const LoginF: React.FC<InjectedFormProps<LoginDataType>> = ({handleSubmit, error}) => {
console.log(handleSubmit);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field placeholder="Email" validate={[required]} component={Input} name='email' type="email" />
      </div>
      <div>
        <Field placeholder="Password" validate={[required]} component={Input} name='password' type="password" />
      </div>
      <div>
        <Field  component="input" type="checkbox" name='rememberMe' /> Remember me
      </div>
      {error && <div className={classes.formError}>{error}</div>}
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