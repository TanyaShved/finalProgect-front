import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import AuthMenu from '../AuthMenu/AuthMenu';
import UserInfo from '../UserInfo';
import Logo from '../Logo';
import Modal from '../Modal';
import NavItem from '../NavItem';
import { authSelectors } from '../../redux/auth';

import sprite from '../../images/sprite.svg';

import s from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);

  const [modalActive, setModalActive] = useState();

  // const isAuthenticated = true; // временная переменная

  return (
    <nav className={s.pageNavigation}>
      <NavLink
        className={s.logo}
        to="/"
        exact
        onClick={() => setModalActive(false)}
      >
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

        {!isAuthenticated ? (
          <div
            className={modalActive ? s.navigationMenu.active : s.navigationMenu}
          >
            <AuthMenu setActive={setModalActive} />
            <button
              className={s.btnClose}
              onClick={() => setModalActive(false)}
            >
              <svg className={s.closeIcon}>
                <use href={sprite + '#close'}></use>
              </svg>
            </button>
          </div>
        ) : (
          <>
            <Modal modalActive={modalActive} setActive={setModalActive}>
              <NavItem name={'Home'} link={'/'} setActive={setModalActive} />
              <NavItem
                name={'Materials'}
                link={'/useful-info'}
                setActive={setModalActive}
              />
              <NavItem
                name={'Contacts'}
                link={'/contacts'}
                setActive={setModalActive}
              />
            </Modal>

            <UserInfo />
          </>
        )}
      </div>
    </nav>
  );
}
