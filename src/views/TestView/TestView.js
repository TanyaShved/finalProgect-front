import { useState } from 'react';
import { useSelector } from 'react-redux';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';

import { testsSelectors } from '../../redux/tests';
import Container from '../../components/Container/Container';
import styles from './TestView.module.css';

export default function TestView() {
  const questions = useSelector(testsSelectors.getQuestions);
  const [value, setValue] = useState('');

  const handleChange = event => {
    setValue(event.target.value);
  };

  return (
    <Container>
      <h1 className={styles.title}>"[ Testing theory_ ]"</h1>
      <button type="button" disabled>
        Finish test
      </button>

      <p className={styles.text}>"{questions[0].question}"</p>

      <FormControl component="fieldset">
        <RadioGroup
          aria-label="gender"
          name="gender1"
          value={value}
          onChange={handleChange}
        >
          {questions[0].answers.map((answer, index) => (
            <FormControlLabel
              value={answer}
              control={<Radio />}
              label={answer}
              key={index}
            />
          ))}
        </RadioGroup>
      </FormControl>

      <button type="button">Previous question</button>
      <button type="button">Next question</button>
    </Container>
  );
}
