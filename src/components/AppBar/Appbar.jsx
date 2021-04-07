import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../Logo';
import Navigation from '../Navigation';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.mainHeader}>
      <NavLink className={s.logo} to="/" exact>
        <Logo />
      </NavLink>

      <Navigation />
    </header>
  );
}
