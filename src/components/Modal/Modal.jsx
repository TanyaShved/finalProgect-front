import React from 'react';
import { useDispatch } from 'react-redux';

import authOperations from 'redux/auth/auth-operations';

import sprite from '../../images/sprite.svg';

import s from './Modal.module.css';

export default function Modal({ modalActive, setActive, children }) {
  const dispatch = useDispatch();

  return (
    <div className={!modalActive ? s.navigationMenu : s.navigationMenu.active}>
      <div className={s.modalWrapper}>
        <ul className={s.menuWrapper}>{children}</ul>
        <button
          type="button"
          className={s.btnLogOut}
          onClick={() => dispatch(authOperations.logOut)}
        >
          <svg className={s.sign_out}>
            <use href={sprite + '#sign-out'}></use>
          </svg>
        </button>
        <button className={s.btnClose} onClick={() => setActive(false)}>
          <svg className={s.closeIcon}>
            <use href={sprite + '#close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
