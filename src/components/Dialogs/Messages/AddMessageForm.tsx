import React from 'react'
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLength, required } from '../../../utils/validators';
import { TextArea } from '../../common/formControls';


export type MessageDataType = {
  newMessageText: string
}
let max = maxLength(50)
const AddM: React.FC<InjectedFormProps<MessageDataType>> = ({
  handleSubmit,
}: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder="type your message"
        component={TextArea}
        name="newMessageText"
        validate={[required, max]}
      />
      <button>add post</button>
    </form>
  );
};
const AddMessageForm = reduxForm<MessageDataType>({
  form: "messageForm",
})(AddM);
export default AddMessageForm