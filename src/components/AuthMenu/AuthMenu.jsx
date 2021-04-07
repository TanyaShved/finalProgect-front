import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthMenu.module.css';

export default function AuthMenu() {
  return (
    <ul className={s.menuWrapper}>
      <li className={s.menuItem}>
        <NavLink to="/contacts" exact className={s.menuLink}>
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
