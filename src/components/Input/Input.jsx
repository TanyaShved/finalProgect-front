import PropTypes from 'prop-types';
import s from './Input.module.css';

const Input = ({ name, register }) => {

    return (
        <li className={s.item}>
            <input
            className={s.input}
            name={name}
            type="text"
            defaultValue="" {...register(name)}
            placeholder={name}
            autoComplete="off"
            />
        </li>
    )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};

export default Input;