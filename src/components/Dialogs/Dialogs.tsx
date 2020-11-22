import React from 'react'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages';
import {ActionsType, userMessage } from '../redux/state'
import classes from './Dialog.module.css'

export type DialogsPropsType = {
  users: Array<userMessage>;
  messages: Array<userMessage>;
  newDialogMessage: string;
  dispatch: (action: ActionsType) => void;
};



const Dialogs: React.FC<DialogsPropsType> = ({
  users,
  messages,
  newDialogMessage,
  dispatch
}) => {
  
  return (
    <div className={classes.Dialogs}>
      <DialogsList users={users} />
      <Messages
        messages={messages}
        newDialogMessage={newDialogMessage}
        dispatch={dispatch}
        
      />
    </div>
  );
};
export default Dialogs;