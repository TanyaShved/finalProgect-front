import PropTypes from 'prop-types';
import s from './Input.module.css';

const InputPassword = ({ name, register, errors }) => {

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
                    minLength: {
                        value: 3,
                        message: 'Min length for this field value must be 3 characters'
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
        
InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired
};

export default InputPassword;