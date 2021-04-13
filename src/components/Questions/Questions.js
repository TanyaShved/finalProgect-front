// import clsx from 'clsx';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles, withStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'block',
  },
});

const OrangeRadio = withStyles({
  root: {
    color: 'defoult',
    '&$checked': {
      color: '#FF6B09',
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default function Questions({ value, handleChange, answers }) {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.root}>
      <RadioGroup
        // className={classes.typography.body1}
        aria-label="answers"
        name="answers"
        value={value}
        onChange={handleChange}
      >
        {answers.map((answer, index) => (
          <FormControlLabel
            // className={classes.label}
            value={answer}
            control={<OrangeRadio />}
            label={answer}
            key={index}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
