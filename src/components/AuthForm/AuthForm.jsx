import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { inputs } from 'initial/imputs-names';
import { buttons } from 'initial/buttons-names';
import { routes } from 'initial/routes-names';
import s from './AuthForm.module.css';
import InputName from 'components/Input/InputName';
import InputEmail from 'components/Input/InputEmail';
import InputPassword from 'components/Input/InputPassword';
import Button from 'components/Button';

const AuthForm = ({ onFormSubmit }) => {
    const { NAME, EMAIL, PASSWORD } = inputs
    const { SIGN_IN, SIGN_UP } = buttons
    const { LOGIN, REGISTER } = routes

    const [text, setText] = useState('')
    const [buttonName, setButtonName] = useState('')
    const location = useLocation()
    
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful, errors },
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    useEffect(() => {
        if (location.pathname === LOGIN) {
            setText(`${LOGIN.slice(1)} to`)
            setButtonName(SIGN_IN)
        } else {
            setText(`${REGISTER.slice(1)} in`)
            setButtonName(SIGN_UP)
        }
    }, [LOGIN, REGISTER, SIGN_IN, SIGN_UP, location.pathname])

    return (
        <div>
            <p className={s.text}>
                {`Or ${text} our app using e-mail and password:`}
            </p>
            <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
                <ul>
                    {location.pathname === REGISTER &&                       
                        <InputName
                            name={NAME}
                            register={register}
                            errors={errors} />}
                    <InputEmail
                        name={EMAIL}
                        register={register}
                        errors={errors} />
                    <InputPassword
                        name={PASSWORD}
                        register={register}
                        errors={errors} />
                </ul>
                <Button
                    className={s.button}
                    name={buttonName}
                    children={buttonName}
                    aria-label={buttonName}/>
            </form>
        </div>
    )
}
    
export default AuthForm;