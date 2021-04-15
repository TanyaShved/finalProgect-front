import s from './Questions.module.css';

export default function Questions({ value, handleChange, answers }) {
  return (
    <form className={s.form} name="anwers">
      <ul>
        {answers.map((answer, index) => (
          <li className={s.ulField} key={index}>
            <label className={s.field}>
              <input
                className={s.radioBtn}
                type="radio"
                name="answer"
                value={answer}
              />
              <span className={s.icon}></span>
              <span className={s.label}>{answer}</span>
            </label>
          </li>
        ))}
      </ul>
    </form>
  );
}
