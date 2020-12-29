import React from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../Preloader/preloader';
import s from './Header.module.css';

type HeaderPropsType = {
    login: null | string;
    isFetching: boolean;
    isLogged: boolean;
};
const Header: React.FC<HeaderPropsType> = ({ login, isFetching, isLogged }) => {
    let userAvatar = isLogged ? (
      <>
        <img alt='ava'/>
        {login}
      </>
    ) : (
      <NavLink to="/login"> login</NavLink>
    );
    let loginContent = isFetching
        ?
        <Preloader />
        :
        userAvatar
    return <header className={s.header}>
        <div></div>
        <div className={s.loginContentWrapper}>
            {loginContent}
        </div>
    </header>
}

export default Header;