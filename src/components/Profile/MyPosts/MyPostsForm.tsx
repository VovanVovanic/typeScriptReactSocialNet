import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators';
import { TextArea } from '../../common/formControls';


export type PostsDataType = {
  PostFormText: string
}
const max= maxLength(100)
const MyPostsF: React.FC<InjectedFormProps<PostsDataType>> = ({
  handleSubmit,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component={TextArea}
        name="PostFormText"
        placeholder="Type your message"
        validate={[required, max]}
      />
      <button>Add post</button>
    </form>
  );
};
const MyPostsForm = reduxForm<PostsDataType>({
form: 'MyPostForm'
})(MyPostsF)

export default MyPostsForm