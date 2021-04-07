import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common.css';
import style from './MainPage.module.css';

function MainPage() {
  return (
    <section className={style.section}>
      <p className={style.text}>
        “Regression testing. What is it? <br /> If the system compiles, that's
        good, if it boots, that's great!”
      </p>
      <span className={style.line}></span>
      <div className={style.authorInfo}>
        <p className={style.author}>Linus Torvalds</p>
        <p className={style.authorBio}>Linux kernel creator, hacker, 1969</p>
      </div>

      <ul className={style.list}>
        <li>
          <Link to="/test" className={style.button + ' ' + style.first}>
            QA technical
            <br /> training
            <p className={style.icon}></p>
          </Link>
        </li>
        <li>
          <Link to="/test" className={style.button + ' ' + style.second}>
            Testing
            <br /> theory
            <p className={style.icon}></p>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MainPage;
