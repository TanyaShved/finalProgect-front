import React from 'react';

import sprite from '../../images/sprite.svg';

import s from './Logo.module.css';

export default function Logo() {
  return (
    <svg className={s.logo}>
      <use href={sprite + '#logo'}></use>
    </svg>
  );
}
