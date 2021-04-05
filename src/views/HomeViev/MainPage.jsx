import React from 'react';
import '../../css/common.css';
import style from './MainPage.module.css';

function MainPage() {
  return (
    <section className={style.section}>
      <p className={style.text}>
        “Регрессионное тестирование. Что это? Если система компилируется, то это
        хорошо, если загружается, то это просто здорово!”
      </p>
      <span className={style.line}></span>
      <div className={style.authorInfo}>
        <p className={style.author}>Линус Торвальдс</p>
        <p className={style.authorBio}>Финский программист, хакер, 1969 г.</p>
      </div>
      <ul>
        <li>
          <a href="http:// " className={style.button + ' ' + style.first}>
            Техническая подготовка QA
          </a>
        </li>
        <li>
          <a href="http:// " className={style.button + ' ' + style.second}>
            Теория тестирования
          </a>
        </li>
      </ul>
    </section>
  );
}

export default MainPage;
