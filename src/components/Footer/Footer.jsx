import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common.css';
import style from './Footer.module.css';
import sprite from '../../images/sprite.svg';

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <svg className={style.iconCopirigth}>
          <use href={sprite + '#icon-copyright'}></use>
        </svg>{' '}
        <p className={style.text}>
          2021 | All Rights Reserved | Developed with
        </p>
        <svg className={style.icon}>
          <use href={sprite + '#icon-heart-fill'}></use>
        </svg>
      </div>
      <div className={style.container}>
        <p className={style.text}>
          <span>by </span>
          <Link to="/contacts" className={style.footerBtn}>
            GoIT Students
          </Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
