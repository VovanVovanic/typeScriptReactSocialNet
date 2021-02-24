import classes from './formControls.module.css';
import React from 'react'
import { WrappedFieldProps } from 'redux-form/lib/Field';

 const FormControls: React.FC<WrappedFieldProps> = ({meta, ...restProps
 }) => {
   let isError = meta.error && meta.touched ? classes.error : "";

   return (
     <div className={`${classes.textArreaWrapper} ${isError}`}>
       {restProps.children}
       {meta.error && meta.touched && <span>{meta.error}</span>}
     </div>
   );
 };

export const TextArea:React.FC<WrappedFieldProps>  = (props) => {
  const { input, meta, ...restProps } = props
  return (
    <FormControls {...props}>
      <textarea {...restProps} {...input} />
    </FormControls>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControls {...props}>
      <input {...restProps} {...input} />
    </FormControls>
  );
};

