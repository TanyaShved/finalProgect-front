import React from 'react';
import { NavLink } from 'react-router-dom';

import s from './NavItem.module.css';

export default function NavItem({ name, link, setActive }) {
  return (
    <li className={s.menuItem}>
      <NavLink
        to={link}
        exact
        className={s.menuLink}
        onClick={() => setActive(false)}
      >
        {name}
      </NavLink>
    </li>
  );
}
