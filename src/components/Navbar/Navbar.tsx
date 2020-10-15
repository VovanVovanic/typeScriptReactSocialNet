import React from "react";
import { NavLink } from "react-router-dom";
import Friends from './friends/Friends'
import {sidebarItemType, routesType} from '../redux/state'
import classes from "./Navbar.module.css";

const Navbar:React.FC<{friendList:Array<sidebarItemType>, routeList:Array<routesType>}> = ({friendList, routeList}) => {


  const links = routeList.map(({ label, to, exact }, i) => {
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
  return(<nav className={classes.nav}>
        <ul>{links}</ul>
        <Friends friendList={friendList} />
      </nav>);
};

export default Navbar;
