import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';

import { testsSelectors } from '../../redux/tests';
import {
  addResult,
  unsetTests,
  unsetResults,
} from '../../redux/tests/tests-slice';
import { testsOperations } from '../../redux/tests';
import styles from './TestView.module.css';
import Questions from '../../components/Questions';
import Loader from '../../components/Loader';

export default function TestView({ testTitle }) {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const questions = useSelector(testsSelectors.getQuestions);
  const results = useSelector(testsSelectors.getResults);
  const testUrl = useSelector(testsSelectors.getTestUrl);
  const [value, setValue] = useState('');
  const [quesNumb, setQuesNumb] = useState(0);
  const question = questions[quesNumb]?.question;
  const answers = questions[quesNumb]?.answers;
  const questionId = questions[quesNumb]?.questionId;

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
    return () => {
      // Очистить store
      dispatch(unsetTests());
      dispatch(unsetResults());
    };
  }, [dispatch]);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(testsOperations.fetchTests(testUrl));
    }
  }, [dispatch, questions, testUrl]);

  const handleChange = event => {
    // setValue(event.target.value);

    dispatch(
      addResult({
        questionId,
        answer: event.target.value,
      }),
    );
  };

  const onPrevious = () => {
    setQuesNumb(quesNumb - 1);
  };

  const onNext = () => {
    setQuesNumb(quesNumb + 1);
  };

  return (
    <>
      <h1 className={styles.testTitle}>
        {testTitle.firstPart} <br></br> {testTitle.secondPart}
      </h1>
      <button
        type="button"
        disabled={results.length !== questions.length}
        // className="btn"
        onClick={() => {
          dispatch(testsOperations.postAnswers({ testUrl, results }));
          history.push('/results');
        }}
      >
        Finish test
      </button>
      <div>
        <p>
          Question <span>{quesNumb + 1}</span>/{questions.length}
        </p>
        <h2 className={styles.text}>{question}</h2>

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

      <button
        type="button"
        disabled={quesNumb === 0}
        onClick={() => onPrevious()}
        className="btn"
      >
        Previous question
      </button>
      <button
        type="button"
        disabled={quesNumb === questions.length - 1}
        onClick={() => onNext()}
        className="btn secondary"
      >
        Next question
      </button>
    </>
  );
}
