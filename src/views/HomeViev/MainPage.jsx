import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/common.css';
import style from './MainPage.module.css';
import sprite from '../../images/sprite.svg';
import { setTestUrl } from '../../redux/tests/tests-slice';
import { useDispatch } from 'react-redux';

function MainPage({ setTestTitle }) {
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
              setTestTitle({
                firstPart: '[QA technical',
                secondPart: 'training_]',
              });
              dispatch(setTestUrl('tech'));
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
              setTestTitle({
                firstPart: '[Testing',
                secondPart: 'theory_]',
              });
              dispatch(setTestUrl('theory'));
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
