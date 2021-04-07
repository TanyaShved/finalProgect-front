import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import '../../css/common.css';
import style from './MainPage.module.css';
import TestPageView from '../TestView';

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

      <ul className={style.list}>
        <li>
          <Link to="/test" className={style.button + ' ' + style.first}>
            Техническая подготовка QA
            <p className={style.icon}></p>
          </Link>
        </li>
        <li>
          <Link to="/test" className={style.button + ' ' + style.second}>
            Теория тестирования
            <p className={style.icon}></p>
          </Link>
        </li>
      </ul>

      <Switch>
        {/* підключити компонент TestPageView */}
        <Route exact path="/test" component={TestPageView} />
        {/* підключити компонент 404 NotFoundView */}
      </Switch>
    </section>
  );
}

export default MainPage;
