import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu';
import Logo from '../Logo';
// import { authSelectors } from '../../redux/auth';

import sprite from '../../images/sprite.svg';

import s from './Navigation.module.css';

// TO DO
// 4. Убрать временные переменные и их значения.

export default function Navigation() {
  // const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);

  const [modalActive, setModalActive] = useState();

  const isAuthenticated = true; // временная переменная

  return (
    <nav className={s.pageNavigation}>
      <NavLink className={s.logo} to="/" exact>
        <Logo />
      </NavLink>

      <div className={s.navigationMenuWrapper}>
        <button
          className={s.btnBurgerMenu}
          onClick={() => setModalActive(true)}
        >
          <svg className={s.burgerMenuIcon}>
            <use href={sprite + '#burger-menu'}></use>
          </svg>
        </button>

        <div
          className={modalActive ? s.navigationMenu.active : s.navigationMenu}
        >
          {!isAuthenticated ? (
            <AuthMenu setActive={setModalActive} />
          ) : (
            <UserMenu setActive={setModalActive} />
          )}
          <button className={s.btnClose} onClick={() => setModalActive(false)}>
            <svg className={s.closeIcon}>
              <use href={sprite + '#close'}></use>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
