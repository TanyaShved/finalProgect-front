import React from 'react';
import '../../css/common.css';
import style from './UsefulInfo.module.css';

function UsefulInfo() {
  return (
    <section className={style.section}>
      <ul>
        <li>
          <h2>Полезная литература</h2>
          <ul>
            <li>Тестирование dot.com Савин.</li>
            <li>Психбольница в руках пациентов.</li>
            <li>Scrum. Дж. Сазерленд.</li>
          </ul>
        </li>
        <li>
          <h2>Полезные ресурсы</h2>
          <ul>
            <li>
              <a href="#">dou.ua</a>
            </li>
            <li>
              <a href="#">Habr</a>
            </li>
            <li>
              <a href="#">facebook.com/QA</a>
            </li>
            <li>
              <a href="#">goit.ua</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
}

export default UsefulInfo;
