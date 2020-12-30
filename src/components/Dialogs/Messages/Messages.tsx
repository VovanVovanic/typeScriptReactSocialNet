
import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { messagesType } from "../../../redux/reducers/dialogs";
import classes from "./Messages.module.css";

type MessagePropsType = {
  messages: messagesType;
  newMessageText: string;
  onMessageFormSubmit: () => void
  onMessageTextChangeAction: (text: string) => void
};
const Messages:React.FC<MessagePropsType> = ({
  messages,
  newMessageText,
  onMessageFormSubmit,
  onMessageTextChangeAction,
}) => {
  const msgList = messages.map(({ label }, i) => {
    return (
      <li key={i}>
        <Link to = '/'>{label}</Link>
      </li>
    );
  });

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onMessageFormSubmit();
  };
  const onMessageTextChange = (e: FormEvent<HTMLInputElement>) => {
    onMessageTextChangeAction(e.currentTarget.value);
  };
  return (
    <>
      <ul className={classes.Messages}>{msgList}</ul>
      <form onSubmit={onFormSubmit}>
        <input onInput={onMessageTextChange} value={newMessageText} />
        <button>add post</button>
      </form>
    </>
  );
};

export default Messages;


