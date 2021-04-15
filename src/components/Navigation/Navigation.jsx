import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import UserInfo from '../UserInfo';
import Logo from '../Logo';
import Modal from '../Modal';

import { authOperations, authSelectors } from '../../redux/auth';

import routes from '../../routes.json';

import sprite from '../../images/sprite.svg';

import s from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsLoggedIn);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState();

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
          <Modal
            routes={[routes[2]]}
            modalActive={modalActive}
            setActive={setModalActive}
          />
        ) : (
          <>
            <Modal
              routes={routes}
              modalActive={modalActive}
              setActive={setModalActive}
            >
              <button
                type="button"
                className={s.btnLogOut}
                onClick={() => dispatch(authOperations.logOut())}
              >
                <svg className={s.sign_out}>
                  <use href={sprite + '#sign-out'}></use>
                </svg>
              </button>
            </Modal>
            <UserInfo />
          </>
        )}
      </div>
    </nav>
  );
}
