import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { buttonSignIn, buttonAuthGoogle } from '../../styles/auth/auth-button';
import { textPrimary, textSecondary } from '../../styles/auth/auth-text';
import { inputs } from '../../initial/imputs-names';
import { buttons } from '../../initial/buttons-names';
import { routes } from '../../initial/routes-names';
import s from './AuthForm.module.css';
import sprite from '../../images/sprite.svg';
import Text from '../Text/Text';
import Input from '../Input/Input';
import Button from '../Button/Button';

const AuthForm = ({ message }) => {
    const { NAME, EMAIL, PASSWORD } = inputs
    const { GOOGLE, SIGN_IN, SIGN_UP } = buttons
    const { LOGIN, REGISTER } = routes

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();
    const location = useLocation()

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onFormSubmit = (data) => {
        const newUser = {
            name: data['Name'],
            email: data['E-mail'],
            password: data['Password']
        }
        console.log(newUser)        
    };

    const getButtonName = () => {
        return location.pathname === LOGIN
            ? SIGN_IN
            : SIGN_UP
    }

    return (
        <div className={s.container}>
            <Text
                style={textPrimary}
                children='You can use your Google Account to authorize:'
            />
            <Button
                style={buttonAuthGoogle}
                aria-label={GOOGLE}
            >
                <svg className={s.icon}>
                    <use href={sprite + '#icon-google'}></use>
                </svg>
                {GOOGLE}
            </Button>
            <Text
                style={textSecondary}
                children={message}
            />
            <form className={s.form} onSubmit={handleSubmit(onFormSubmit)}>
                <ul>
                    {location.pathname === REGISTER &&
                        <Input name={NAME} register={register} />}
                    <Input name={EMAIL} register={register} />
                    <Input name={PASSWORD} register={register} />
                </ul>
                <Button
                    style={buttonSignIn}
                    name={getButtonName()}
                    children={getButtonName()}
                    aria-label={getButtonName()}/>
            </form>
        </div>
    )
}
    
export default AuthForm;