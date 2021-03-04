import classes from './form.module.css';
import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form'
import { required } from '../../utils/validators';
import { Input } from '../common/formControls';

export type LoginDataType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string | null
}
export type LoginOwnPropsType = {
  captcha: null| string
}
const LoginF: React.FC<LoginOwnPropsType & InjectedFormProps<LoginDataType, LoginOwnPropsType>> = ({
  captcha,
  handleSubmit,
  error,
}) => {
  return (
    <>
      <div style={{ fontSize: "22px" }}>
        <p>Sorry but APP creation is still in progress</p>
        <p>
          To log in get registered&ensp;
          <a
            style={{ color: "yellow" }}
            href={"https://social-network.samuraijs.com/ "}
            target={"_blank"}
          >
            here
          </a>
        </p>
        <p>or use common test account credentials:</p>
        <p>Email: free@samuraijs.com</p>
        <p>Password: free</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <Field
            placeholder="Email"
            validate={[required]}
            component={Input}
            name="email"
            type="email"
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            validate={[required]}
            component={Input}
            name="password"
            type="password"
          />
        </div>
        {captcha && <img src={captcha} alt="captcha" />}
        {captcha && (
          <Field
            placeholder="type symbols from the photo"
            validate={[required]}
            component={Input}
            name='captcha'
            type = 'text'
          />
        )}
        <div>
          <Field component="input" type="checkbox" name="rememberMe" /> Remember
          me
        </div>
        {error && <div className={classes.formError}>{error}</div>}
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};
const LoginForm = reduxForm<LoginDataType, LoginOwnPropsType>({
  form: "login",
})(LoginF);
export default LoginForm