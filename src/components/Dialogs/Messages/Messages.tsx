
import React from "react";
import { Link } from "react-router-dom";
import { messagesType } from "../../../redux/reducers/dialogs";
import AddMessageForm, { MessageDataType } from "./AddMessageForm";
import classes from "./Messages.module.css";

type MessagePropsType = {
  messages: messagesType;
  onMessageFormSubmit: (value:string) => void
  
};
const Messages:React.FC<MessagePropsType> = ({
  messages,
  onMessageFormSubmit,

}) => {
  const msgList = messages.map(({ label }, i) => {
    return (
      <li key={i}>
        <Link to = '/'>{label}</Link>
      </li>
    );
  });

  const onFormSubmit = (values: MessageDataType) => {
    onMessageFormSubmit(values.newMessageText);
  };

  return (
    <>
      <ul className={classes.Messages}>{msgList}</ul>
      <AddMessageForm onSubmit={onFormSubmit}/>
    </>
  );
};

export default Messages;




