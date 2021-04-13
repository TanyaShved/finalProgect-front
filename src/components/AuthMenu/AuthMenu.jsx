import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './AuthMenu.module.css';

export default function AuthMenu({ setActive }) {
  return (
    <ul className={s.menuWrapper}>
      <li className={s.menuItem}>
        <NavLink
          to="/contacts"
          exact
          className={s.menuLink}
          onClick={() => setActive(false)}
        >
          Contacts
        </NavLink>
      </li>
    </ul>
  );
}
