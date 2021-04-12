import PropTypes from 'prop-types';
import s from './Input.module.css';

const InputEmail = ({ name, register, errors }) => {

    return (
        <li className={s.item}>
            <input
                className={s.input}
                name={name}
                type="text"
                defaultValue=""
                {...register(name, {
                    required:
                    {
                        value: true,
                        message: 'This field cannot be empty'
                    },
                    pattern: {
                        value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z_-]+(\.[a-z_-]+)*\.[a-z]{2,6}$/,
                        message: 'Email is not valid'
                    }
                })}
                placeholder={name}
                autoComplete="off"
            />
            {errors[`${name}`] &&
                <p className={s.error}>{`${errors?.[name]?.message}`}</p>}
        </li>
    )
}
        
InputEmail.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};

export default InputEmail;