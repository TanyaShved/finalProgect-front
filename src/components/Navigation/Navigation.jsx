import React from 'react';
// import { useSelector } from 'react-redux';
// import { NavLink } from 'react-router-dom';

import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu';
// import { authSelectors } from '../../redux/auth';
// import { Home } from '../../routes/index';

import sprite from '../../images/sprite.svg';

import s from './Navigation.module.css';

// TO DO
// 1. Добавиль NavLink's на лого;
// 2. Прикрутить рауты;
// 3. Заменить svg на svg в NavLink;
// 4. Убрать временные переменные и их значения.

export default function Navigation() {
  // const isAuthenticated = useSelector(authSelectors.getIsLoggedIn)

  const isAuthenticated = false; // временная переменная

  return (
    <nav className={s.pageNavigation}>
      <svg className={s.logo}>
        <use href={sprite + '#logo'}></use>
      </svg>

      {/* <NavLink
        className={s.logo}
        activeClassName={s.logo_active}
        to={Home.path}
        key={Home.label}
        exact={Home.exact}
      >
        <svg className={s.logo}>
          <use href={sprite + '#logo'}></use>
        </svg>
      </NavLink> */}

      <div className={s.navigationMenu}>
        <div>
          <svg className={s.burgerMenu}>
            <use href={sprite + '#burger-menu'}></use>
          </svg>
          <svg className={s.close}>
            <use href={sprite + '#close'}></use>
          </svg>
        </div>

        {/* <UserMenu /> */}
        {/* <AuthMenu /> */}

        {!isAuthenticated ? <AuthMenu /> : <UserMenu />}
      </div>
    </nav>
  );
}
