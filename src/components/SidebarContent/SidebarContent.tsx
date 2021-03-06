import { TeamOutlined, UserOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const SidebarContent: React.FC<{ location: string }> = ({ location }) => {
  let l = location === 'profile' || location === 'dialogs' || location === 'settings' ? location : null
  
  const [menuKey, setMenuKey] = useState<string | null>(null)
  useEffect(() => {
   setMenuKey(l)
 }, [location])
  
  const [sub, setSub] = useState<string>('sub1')
  const profileMenuItems = [
    { key: "profile", label: "Profile", to: "/profile", exact: false },
    { key: "dialogs", label: "Messages", to: "/dialogs", exact: false },
    { key: "settings", label: "Settings", to: "/settings", exact: false },
  ].map((el) => {
    return (
      <Menu.Item key={el.key} onClick={() => setMenuKey(el.key)}>
        <NavLink to={el.to} exact={el.exact}>
          {el.label}
        </NavLink>
      </Menu.Item>
    );
  });
  
  return (
      <Menu
        mode="inline"
        selectedKeys={[`${menuKey}`]}
        openKeys={[`${sub}`]}
        style={{ height: "100%", borderRight: 0 }}
      >
        <SubMenu key="sub1" icon={<UserOutlined />} title="My Profile" onTitleClick={()=>setSub('sub1')}>
          {profileMenuItems}
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Users" onTitleClick={()=>setSub('sub2')}>
        <Menu.Item key="users" onClick={() => setMenuKey('users')}>
          <NavLink to ='./users'>Users</NavLink>
          </Menu.Item>
        </SubMenu>
      </Menu>
  );
}
export default SidebarContent