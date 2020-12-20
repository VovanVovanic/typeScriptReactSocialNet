// import React from "react";
// import { NavLink } from "react-router-dom";
// import Friends from './friends/Friends'
// import {sidebarItemType, routesType} from '../redux/state'
// import classes from "./Navbar.module.css";

// const Navbar:React.FC<{friendList:Array<sidebarItemType>, routeList:Array<routesType>}> = ({friendList, routeList}) => {


//   const links = routeList.map(({ label, to, exact }, i) => {
//     return (
//       <li key={i}>
//         <NavLink
//           className={classes.item}
//           to={to}
//           exact={exact}
//           activeClassName={classes.active}
//         >
//           {label}
//         </NavLink>
//       </li>
//     );
//   });
//   return(<nav className={classes.nav}>
//         <ul>{links}</ul>
//         <Friends friendList={friendList} />
//       </nav>);
// };
 
// export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import { friendType } from "../redux/reducers/sidebar";
import Friends from "./friends";
import classes from "./Navbar.module.css";

type navBarPropsType = {
  friendList: Array<friendType>;
};
const Navbar:React.FC<navBarPropsType> = ({ friendList }) => {
  const list = [
    { label: "Profile", to: "/profile", exact: false },
    { label: "Messages", to: "/dialogs", exact: false },
    { label: "News", to: "/news", exact: false },
    { label: "Music", to: "/music", exact: false },
    { label: "Settings", to: "/settings", exact: false },
    // { label: "Users", to: "/users", exact: false },
  ];

  const links = list.map(({ label, to, exact }, i) => {
    return (
      <li key={i}>
        <NavLink
          className={classes.item}
          to={to}
          exact={exact}
          activeClassName={classes.active}
        >
          {label}
        </NavLink>
      </li>
    );
  });
  return (
    <nav className={classes.nav}>
      <ul>{links}</ul>
      <Friends friendList={friendList} />
    </nav>
  );
};

export default Navbar;
