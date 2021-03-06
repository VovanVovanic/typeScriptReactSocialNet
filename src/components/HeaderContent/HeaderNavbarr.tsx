
import { Menu } from "antd";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const HeaderNavbar:React.FC<{location:string}> = ({location}) => {
const l = location === 'news' || location === 'music' ? location : null
  const [active, setActive] = useState<string| null>(null)
  useEffect(() => {
  setActive(l)
}, [location])
  
  const list = [
    { key: 'news',label: "News", to: "/news", exact: false },
    { key: 'music',label: "Music", to: "/music", exact: false },
  ];

  const links = list.map(({ label, to, exact, key }, i) => {
    return (
      <Menu.Item key={key} onClick={() => setActive(key)}>
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


export default HeaderNavbar;
