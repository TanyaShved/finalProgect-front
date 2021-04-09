import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthMenu from '../AuthMenu/AuthMenu';
import UserMenu from '../UserMenu';
import Logo from '../Logo';
import { authSelectors } from '../../redux/auth';

import sprite from '../../images/sprite.svg';

import s from './Navigation.module.css';

// TO DO
// 4. Убрать временные переменные и их значения.

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);

  // const isAuthenticated = false; // временная переменная

  return (
    <nav className={s.pageNavigation}>
      <NavLink className={s.logo} to="/" exact>
        <Logo />
      </NavLink>

      <div className={s.navigationMenuWrapper}>
        <div className={s.btnBurgerMenu}>
          <a href="#openNavigationMenu" className={s.openNavigationMenu}>
            <svg className={s.burgerMenuIcon}>
              <use href={sprite + '#burger-menu'}></use>
            </svg>
          </a>
        </div>

        <div id="openNavigationMenu" className={s.navigationMenu}>
          {!isAuthenticated ? <AuthMenu /> : <UserMenu />}
          <div className={s.btnClose}>
            <a
              href="#closeNavigationMenu"
              title="Close"
              className={s.closeNavigationMenu}
            >
              <svg className={s.closeIcon}>
                <use href={sprite + '#close'}></use>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
