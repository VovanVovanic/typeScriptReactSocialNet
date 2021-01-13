import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


export type PostsDataType = {
  PostFormText: string
}
const MyPostsF: React.FC<InjectedFormProps<PostsDataType>> = ({
  handleSubmit,
}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        component="textarea"
        name="PostFormText"
        placeholder="Type your message"
      />
      <button>Add post</button>
    </form>
  );
};
const MyPostsForm = reduxForm<PostsDataType>({
form: 'MyPostForm'
})(MyPostsF)

export default MyPostsForm