import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


export type MessageDataType = {
  newMessageText: string
}
const AddM: React.FC<InjectedFormProps<MessageDataType>> = ({
  handleSubmit,
}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="type your message"
        component="textarea"
        name="newMessageText"
      />
      <button>add post</button>
    </form>
  );
};
const AddMessageForm = reduxForm<MessageDataType>({
  form: "messageForm",
})(AddM);
export default AddMessageForm