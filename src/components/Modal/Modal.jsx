import React from 'react';

import NavItem from '../NavItem';

import sprite from '../../images/sprite.svg';

import s from './Modal.module.css';

export default function Modal({ routes, modalActive, setActive, children }) {
  const routesLength = routes.length;

  return (
    <div
      className={
        modalActive
          ? s.navigationMenu + ' ' + s.navigationMenuActive
          : s.navigationMenu
      }
    >
      <div className={s.modalWrapper}>
        <ul className={routesLength > 1 ? s.longMenu : s.shortMenu}>
          {routes.map(({ name, path, id }) => (
            <NavItem name={name} link={path} key={id} setActive={setActive} />
          ))}
        </ul>

        {children}

        <button className={s.btnClose} onClick={() => setActive(false)}>
          <svg className={s.closeIcon}>
            <use href={sprite + '#close'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
