import React from "react";
import classes from "./Dialog.module.css";
import MessagesContainer from "./Messages/MessagesContainer";
import DialogsListContainer from "./DialogsList/DialogListContainer";

const Dialogs = () => {
  return (
    <div className={classes.Dialogs}>
      <DialogsListContainer />
      <MessagesContainer />
    </div>
  );
};
export default Dialogs;
