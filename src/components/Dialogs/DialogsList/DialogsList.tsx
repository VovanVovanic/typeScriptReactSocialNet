// import React from 'react'
// import { Link } from 'react-router-dom'
// import {userMessage}from '../../redux/state'
// import classes from './DialogsList.module.css'

// export type DialogsListPropsType = {
// users: Array<userMessage>
// }

// const DialogsList: React.FC<DialogsListPropsType> = ({users}) => {



//     const userRoutes = users.map(({ label }, i) => {
//       return <li key={i}>
//           <Link to={`/dialogs/${i}`}>{label}</Link>
//         </li>;
//     });

//     return <ul className={classes.DialogsList}>{userRoutes}</ul>;
// }

// export default DialogsList

import React from "react";
import { Link } from "react-router-dom";
import { usersType } from "../../redux/reducers/dialogs";
import classes from "./DialogsList.module.css";

export type DialogsListPropsType = {
  users: usersType;
};
const DialogsList:React.FC<DialogsListPropsType> = ({ users }) => {
  const userRoutes = users.map(({ label }, i) => {
    return (
      <li key={i}>
        <Link to={`/dialogs/${i}`}>{label}</Link>
      </li>
    );
  });

  return <ul className={classes.DialogsList}>{userRoutes}</ul>;
};

export default DialogsList;