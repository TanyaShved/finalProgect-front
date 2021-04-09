import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

import { testsSelectors } from '../../redux/tests';
import { addResult } from '../../redux/tests/tests-slice';
import Container from '../../components/Container/Container';
import styles from './TestView.module.css';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function TestView() {
  const dispatch = useDispatch();
  const questions = useSelector(testsSelectors.getQuestions);
  const results = useSelector(testsSelectors.getResults);
  const [value, setValue] = useState('');
  const [quesNumb, setQuesNumb] = useState(0);
  const question = questions[quesNumb].question;
  const answers = questions[quesNumb].answers;
  const questionId = questions[quesNumb].questionId;
  const classes = useStyles();

  const handleChange = event => {
    setValue(event.target.value);

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
    <Container>
      <h1 className={styles.title}>"[ Testing theory_ ]"</h1>
      <button type="button" disabled={results.length !== questions.length}>
        Finish test
      </button>

      <h2 className={styles.text}>"{question}"</h2>

      <FormControl component="fieldset" className={classes.root}>
        <RadioGroup
          aria-label="answers"
          name="answers"
          value={value}
          onChange={handleChange}
        >
          {answers.map((answer, index) => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={answer}
              key={index}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <button
        type="button"
        disabled={quesNumb === 0}
        onClick={() => onPrevious()}
      >
        Previous question
      </button>
      <button
        type="button"
        disabled={quesNumb === questions.length - 1}
        onClick={() => onNext()}
      >
        Next question
      </button>
    </Container>
  );
}
