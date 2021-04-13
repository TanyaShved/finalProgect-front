import React from 'react';
import '../../css/common.css';
import style from './UsefulInfo.module.css';

function UsefulInfo() {
  return (
    <section className={style.section}>
      <ul className={style.articles}>
        <li className={style.articl}>
          <h2 className={style.title}>Useful literature</h2>
          <span className={style.line}></span>
          <ol className={style.numList}>
            <li>Testing dot.com Savin.</li>
            <li>A mental hospital in the hands of patients.</li>
            <li>Scrum. J. Sutherland.</li>
          </ol>
        </li>

        <li className={style.articl}>
          <h2 className={style.title}>Useful resources</h2>
          <span className={style.line}></span>
          <ol className={style.numList}>
            <li>
              <a className={style.linkToSite} href="https://dou.ua/">
                dou.ua
              </a>
            </li>
            <li>
              <a className={style.linkToSite} href="https://habr.com/">
                Habr
              </a>
            </li>
            <li>
              <a className={style.linkToSite} href="https://www.facebook.com/">
                facebook.com/QA
              </a>
            </li>
            <li>
              <a className={style.linkToSite} href="https://goit.ua/">
                goit.ua
              </a>
            </li>
          </ol>
        </li>
      </ul>
    </section>
  );
}

export default UsefulInfo;
