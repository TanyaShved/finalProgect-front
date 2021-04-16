import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  setTestUrl,
  unsetTests,
  unsetResults,
  setQuesNumb,
} from '../../redux/tests/tests-slice';

import '../../css/common.css';
import style from './MainPage.module.css';
import sprite from '../../images/sprite.svg';

function MainPage() {
  const dispatch = useDispatch();

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
          <Link
            to="/test"
            className={style.button + ' ' + style.first}
            onClick={() => {
              dispatch(setTestUrl('tech'));
              dispatch(unsetTests());
              dispatch(unsetResults());
              dispatch(setQuesNumb(0));
            }}
          >
            QA technical
            <br /> training
            <svg className={style.icon}>
              <use href={sprite + '#icon-arrow'}></use>
            </svg>
          </Link>
        </li>
        <li>
          <Link
            to="/test"
            className={style.button + ' ' + style.second}
            onClick={() => {
              dispatch(setTestUrl('theory'));
              dispatch(unsetTests());
              dispatch(unsetResults());
              dispatch(setQuesNumb(0));
            }}
          >
            Testing
            <br /> theory
            <svg className={style.icon}>
              <use href={sprite + '#icon-arrow'}></use>
            </svg>
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default MainPage;
