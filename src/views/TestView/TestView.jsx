import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { testsSelectors } from '../../redux/tests';
import { addResult, setQuesNumb } from '../../redux/tests/tests-slice';
import { testsOperations } from '../../redux/tests';
import styles from './TestView.module.css';
import Questions from '../../components/Questions';
import Loader from '../../components/Loader';
import classes from './TestView.module.css';
import sprite from '../../images/sprite.svg';

export default function TestView() {
  const history = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector(testsSelectors.getQuestions);
  const results = useSelector(testsSelectors.getResults);
  const testUrl = useSelector(testsSelectors.getTestUrl);
  const quesNumb = useSelector(testsSelectors.getQuesNumb);
  const [value, setValue] = useState('');
  // const [quesNumb, setQuesNumb] = useState(0);
  const question = questions[quesNumb]?.question;
  const answers = questions[quesNumb]?.answers;
  const questionId = questions[quesNumb]?.questionId;
  const disabled = results.length !== questions.length;

  function testName(testUrl) {
    if (testUrl === 'theory') {
      return (
        <h1 className={styles.testTitle}>
          [Testing <br></br> theory_]
        </h1>
      );
    } else if (testUrl === 'tech') {
      return (
        <h1 className={styles.testTitle}>
          [QA technical <br></br> training_]
        </h1>
      );
    }
  }

  useEffect(() => {
    const answer = results.find(result => result.questionId === questionId)
      ?.answer;

    if (answer) {
      setValue(answer);
    } else {
      setValue('');
    }
  }, [questionId, results]);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(testsOperations.fetchTests(testUrl));
    }
  }, [dispatch, questions, testUrl]);

  const handleChange = event => {
    dispatch(
      addResult({
        questionId,
        answer: event.target.value,
      }),
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.testHeader}>
        {testName(testUrl)}
        <button
          type="button"
          disabled={results.length !== questions.length}
          className={
            disabled
              ? `${styles.finishTestBtn} ${styles.finishTestBtnDis}`
              : styles.finishTestBtn
          }
          onClick={() => {
            dispatch(testsOperations.postAnswers({ testUrl, results }));
            dispatch(setQuesNumb(0));
            history.push('/results');
          }}
        >
          Finish test
        </button>
      </div>
      <div className={styles.testCard}>
        <p className={styles.quesStat}>
          Question <span className={styles.quesNumb}>{quesNumb + 1}</span>/
          {questions.length}
        </p>
        <h2 className={styles.question}>{question}</h2>

        {questions.length > 0 ? (
          <Questions
            value={value}
            handleChange={handleChange}
            answers={answers}
          />
        ) : (
          <Loader />
        )}
      </div>
      <div className={classes.navBtns}>
        <button
          type="button"
          disabled={quesNumb === 0}
          onClick={() => dispatch(setQuesNumb(quesNumb - 1))}
          className={
            quesNumb === 0
              ? `${classes.prevBtnDis} ${classes.prevBtn}`
              : classes.prevBtn
          }
        >
          <svg className={classes.leftArrow}>
            <use href={sprite + '#left-arrow'}></use>
          </svg>
          <span className={classes.navBtnsText}>Previous question</span>
        </button>
        <button
          type="button"
          disabled={quesNumb === questions.length - 1}
          onClick={() => dispatch(setQuesNumb(quesNumb + 1))}
          className={
            quesNumb === questions.length - 1
              ? `${classes.nextBtnDis} ${classes.nextBtn}`
              : classes.nextBtn
          }
        >
          <span className={classes.navBtnsText}>Next question</span>
          <svg className={classes.rightArrow}>
            <use href={sprite + '#right-arrow'}></use>
          </svg>
        </button>
      </div>
    </div>
  );
}
