import React from 'react';
import '../../css/common.css';
import style from './NotFound.module.css';
import notFoundImg from '../../images/404-error.jpg';

function NotFound() {
  return (
    <section className={style.section}>
      <h1>Page not found</h1>
      <img className={style.img} src={notFoundImg} alt="sad cat" />
    </section>
  );
}

export default NotFound;
