// import React, { ChangeEvent, FormEvent } from 'react'
// import { ActionsType, addDialogMessageAC, changeDialogMessageAC, userMessage } from '../../redux/state'
// import classes from './Messages.module.css'

// type MessagePropsType = {
//   messages: Array<userMessage>;
//   newMessageText: string;
//   dispatch: (action: ActionsType) => void;
// };

// const Messages: React.FC<MessagePropsType> = ({
//   messages,
//   newMessageText,
//   dispatch,
// }) => {
//   const msgList = messages.map(({ label }, i) => {
//     return (
//       <li key={i}>
//         <span>{label}</span>
//       </li>
//     );
//   });

//   const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     if (e.currentTarget.value) {
//       dispatch(changeDialogMessageAC(e.currentTarget.value));
//     }
//   };

//   const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     dispatch(addDialogMessageAC());
//   };
//   return (
//     <>
//       <ul className={classes.Messages}>{msgList}</ul>
//       <form onSubmit={onFormSubmit}>
//         <input
//           placeholder="Type your message"
//           value={newMessageText}
//           onChange={onInputChange}
//         />
//         <button>Add Message</button>
//       </form>
//     </>
//   );
// };



// export default Messages

import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { onMessageFormSubmitType, onMessageTextChangeActionType } from "../../redux/actions/messages";
import { messagesType } from "../../redux/reducers/dialogs";
import classes from "./Messages.module.css";

type MessagePropsType = {
  messages: messagesType;
  newMessageText: string;
  onMessageFormSubmit: () => onMessageFormSubmitType;
  onMessageTextChangeAction: (text: string) => onMessageTextChangeActionType;
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


