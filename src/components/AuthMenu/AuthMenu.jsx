import React from 'react';
// import { NavLink } from 'react-router-dom';

import s from './AuthMenu.module.css';

// TO DO
// 1. Добавиль NavLink's на контакты;
// 2. Прикрутить рауты;

export default function AuthMenu() {
  return (
    <ul className={s.menuWrapper}>
      <li className={s.menuItem}>
        <a href="#" className={s.menuLink}>
          Contacts
        </a>
      </li>
    </ul>
  );
}
