import React from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unsetResults } from '../../redux/tests/tests-slice';
import { testsSelectors } from '../../redux/tests';
import Container from '../../components/Container';
import Diagramm from '../../components/Diagramm';
import notBadCat from '../../images/not_bad_cat.png';
import badCat from '../../images/bad_cat.png';

import s from './ResultView.module.css';

export default function ResultView() {
  const location = useLocation();
  const history = useHistory();

  const dispatch = useDispatch();
  const testUrl = useSelector(testsSelectors.getTestUrl);
  const testStatistics = useSelector(testsSelectors.getTestStatistics);

  const correctAnswers = testStatistics.rightAnswer;
  const incorrectAnswers = testStatistics.incorrectAnswer;
  const totalAnswers = correctAnswers + incorrectAnswers;

  let mainText = '';
  let secondaryText = '';
  let catImage = null;
  // let testName = '';

  function testName(testUrl) {
    if (testUrl === 'theory') {
      return '[TESTING THEORY_]';
    } else if (testUrl === 'tech') {
      return '[QA TECHNICAL TRAINING_]';
    }
  }

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

  const tryAgain = () => {
    dispatch(unsetResults());
    history.push(location?.state?.from ?? '/');
  };

  return (
    <Container>
      <h1 className={s.title}>Results</h1>
      <p className={s.subTitle}>{testName(testUrl)}</p>
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
      <button className={s.button} type="button" onClick={tryAgain}>
        Try again
      </button>
    </Container>
  );
}
