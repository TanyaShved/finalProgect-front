import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

// import { authSelectors, authOperations } from '../../redux/auth';
// import { NavLink } from 'react-router-dom';

import sprite from '../../images/sprite.svg';

import s from './UserMenu.module.css';

// TO DO
// 1. Добавиль NavLink's в li;
// 2. Прикрутить рауты;
// 3. Убрать временные переменные и их значения.
// 4. Решить вопрос с аватаркой юзера, пока оставить ее стилизирование
// с помощью css. Возможно в дальнейшем прикрутить возможность дать юзеру
// возможность самостоятельно менять авку.

export default function UserMenu() {
  //   const dispatch = useDispatch();
  //   const name = useSelector(authSelectors.getUserName);

  const name = 'User1'; // Временная переменная

  return (
    <div>
      <ul>
        <li>home</li>
        <li>materials</li>
        <li>contacts</li>
      </ul>
      <ul className={s.navigationList}>
        <li>
          <span>U</span>
          {/* <img alt="User avatar" width="32" className={s.avatar} /> */}
          <span> {name} </span>
        </li>
      </ul>
      <button
        type="button"
        className={s.btn}
        // onClick={() => dispatch(authOperations.onLogout)}
      >
        <svg className={s.sign_out}>
          <use href={sprite + '#sign-out'}></use>
        </svg>
      </button>
    </div>
  );
}
