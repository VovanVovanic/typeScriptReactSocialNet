import React from 'react'
import DialogsList from './DialogsList/DialogsList'
import Messages from './Messages/Messages';
import {dialogsType, userMessage} from '../redux/state'
import classes from './Dialog.module.css'

export type DialogsPropsType = dialogsType



const Dialogs: React.FC<DialogsPropsType> = ({users, messages} ) => {

  return (
    <div className={classes.Dialogs}>
      <DialogsList users={users}/>
      <Messages messages={messages}/>
    </div>
  );
};
export default Dialogs;