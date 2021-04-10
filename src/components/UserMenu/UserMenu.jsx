import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { authSelectors, authOperations } from '../../redux/auth';
import { NavLink } from 'react-router-dom';

import sprite from '../../images/sprite.svg';

import s from './UserMenu.module.css';

// TO DO
// 3. Убрать временные переменные и их значения.
// 4. Решить вопрос с аватаркой юзера, пока оставить ее стилизирование
// с помощью css. Возможно в дальнейшем прикрутить возможность юзеру
// самостоятельно менять авку.

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  // const name = 'User1'; // Временная переменная
  const userAvatar = false; // Временная переменная

  return (
    <ul className={s.menuWrapper}>
      <li className={s.menuItem}>
        <NavLink to="/" exact className={s.menuLink}>
          Home
        </NavLink>
      </li>
      <li className={s.menuItem}>
        <NavLink to="/useful-info" exact className={s.menuLink}>
          Materials
        </NavLink>
      </li>
      <li className={s.menuItem}>
        <NavLink to="/contacts" exact className={s.menuLink}>
          Contacts
        </NavLink>
      </li>
      <li className={s.userInfoMenu}>
        {userAvatar ? (
          <img
            src={userAvatar}
            alt="User avatar"
            width="30"
            height="30"
            className={s.userAvatar}
          />
        ) : (
          <span className={s.userAvatar}>{name[0]}</span>
        )}

        <span className={s.userName}> {name} </span>
        <button
          type="button"
          className={s.btnLogOut}
          onClick={() => dispatch(authOperations.onLogout)}
        >
          <svg className={s.sign_out}>
            <use href={sprite + '#sign-out'}></use>
          </svg>
        </button>
      </li>
    </ul>
  );
}
