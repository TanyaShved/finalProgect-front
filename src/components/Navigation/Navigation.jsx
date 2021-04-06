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

      <div className={s.navigationMenuWrapper}>
        <div className={s.btnControls}>
          <span className={s.btnBurgerMenu}>
            <svg className={s.burgerMenuIcon}>
              <use href={sprite + '#burger-menu'}></use>
            </svg>
          </span>
          <span className={s.btnClose}>
            <svg className={s.closeIcon}>
              <use href={sprite + '#close'}></use>
            </svg>
          </span>
        </div>

        {/* <div className={s.btnControls}>
          <button type="button" className={s.btnBurgerMenu}>
            <svg className={s.burgerMenuIcon}>
              <use href={sprite + '#burger-menu'}></use>
            </svg>
          </button>
          <button type="button" className={s.btnClose}>
            <svg className={s.closeIcon}>
              <use href={sprite + '#close'}></use>
            </svg>
          </button>
        </div> */}

        <div className={s.navigationMenu}>
          {!isAuthenticated ? <AuthMenu /> : <UserMenu />}
        </div>
      </div>
    </nav>
  );
}
