import React from 'react';
import Container from '../../components/Container';
import Diagramm from '../../components/Diagramm';
import notBadCat from '../../images/not_bad_cat.png';
import badCat from '../../images/bad_cat.png';

import s from './ResultView.module.css';

export default function ResultView() {
  const correctAnswers = 9;
  const totalAnswers = 12;

  function markResult(correctAnswers, totalAnswers) {
    if (correctAnswers === totalAnswers) {
      return 5;
    } else if (correctAnswers > totalAnswers / 2) {
      return 3;
    } else if (correctAnswers <= totalAnswers / 2) {
      return 2;
    }
  }

  const mark = markResult(correctAnswers, totalAnswers);

  let mainText = '';
  let secondaryText = '';
  let catImage = null;
  if (mark === 5) {
    mainText = 'Excellent!!!';
    secondaryText = 'You are the best of the best of the best!';
    catImage = notBadCat;
  } else if (mark === 3) {
    mainText = 'Not bad!';
    secondaryText = 'But you still need to learn some materials.';
    catImage = notBadCat;
  } else if (mark === 2) {
    mainText = 'Bad!';
    secondaryText = 'You need to learn materials again.';
    catImage = badCat;
  }

  return (
    <Container>
      <h1 className={s.title}>Results</h1>
      {/* переменная с именем теста */}
      <p className={s.subTitle}>[TESTING THEORY_]</p>
      <span className={s.line}></span>
      <div className={s.diagramm}>
        <Diagramm />
      </div>
      <div className={s.answers}>
        <p className={s.answersText}>
          Correct answers -{' '}
          <span className={s.answerNumber}>{correctAnswers}</span>
        </p>
        <span className={s.verticalLine}></span>
        <p className={s.answersText}>
          Total answers - <span className={s.answerNumber}>{totalAnswers}</span>
        </p>
      </div>

      <img className={s.resultImage} src={catImage} alt="Cat" />

      <h2 className={s.resultTitle}>{mainText}</h2>
      <p className={s.resultText}>{secondaryText}</p>
      <button className={s.button} type="button">
        Try again
      </button>
    </Container>
  );
}
