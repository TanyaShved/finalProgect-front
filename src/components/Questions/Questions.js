import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
});

export default function Questions({ value, handleChange, answers }) {
  const classes = useStyles();

  return (
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
  );
}
