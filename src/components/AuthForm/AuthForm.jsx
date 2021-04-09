import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { authButtonForm } from '../../styles/auth/auth-button';
import { textPrimary, textSecondary } from '../../styles/auth/auth-text';
import { inputs } from '../../initial/imputs-names';
import { buttons } from '../../initial/buttons-names';
import operations from '../../redux/auth/auth-operations';
import s from './AuthForm.module.css';
import sprite from '../../images/sprite.svg';
import Text from '../Text/Text';
import Input from '../Input/Input';
import Button from '../Button/Button';
import AuthButtonList from '../../components/AuthButtonList';

const AuthForm = ({ message }) => {
    const { NAME, EMAIL, PASSWORD } = inputs
    const { GOOGLE } = buttons
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();
    const dispatch = useDispatch()

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onFormSubmit = (e, data) => {
        const newUser = {
            name: data['Name'],
            email: data['E-mail'],
            password: data['Password']
        }
        console.log(e)
        dispatch(operations.register(newUser))
        
    };

    return (
        <div className={s.container}>
            <Text
                style={textPrimary}
                children='You can use your Google Account to authorize:'
            />
            <Button
                style={authButtonForm}
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
                    <Input name={NAME} register={register} />
                    <Input name={EMAIL} register={register} />
                    <Input name={PASSWORD} register={register} />
                </ul>
                <AuthButtonList />
            </form>
        </div>
    )
}
    
export default AuthForm;