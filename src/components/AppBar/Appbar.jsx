import React from 'react';

import Logo from '../Logo';
import Navigation from '../Navigation';

import s from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={s.mainHeader}>
      <Logo />
      <Navigation />
    </header>
  );
}
