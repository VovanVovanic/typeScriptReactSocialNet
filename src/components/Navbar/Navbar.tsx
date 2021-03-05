
import { Menu } from "antd";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";



const Navbar = () => {
  const [active, setActive] = useState<number>(0)
  const list = [
    { label: "Profile", to: "/profile", exact: false },
    { label: "Messages", to: "/dialogs", exact: false },
    { label: "News", to: "/news", exact: false },
    { label: "Music", to: "/music", exact: false },
    { label: "Settings", to: "/settings", exact: false },
    { label: "Users", to: "/users", exact: false },
  ];

  const links = list.map(({ label, to, exact }, i) => {
    return (
      <Menu.Item key={i} onClick={() => setActive(i)}>
        <NavLink to={to} exact={exact}>
          {label}
        </NavLink>
      </Menu.Item>
    );
  });
  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={[`${active}`]}>
      {links}
    </Menu>
  );
};


export default Navbar;
