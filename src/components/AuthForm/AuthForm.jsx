import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
    buttonForm,
    activeButtonForm,
    authButtonForm
} from '../../styles/auth/auth-button';
import { textPrimary, textSecondary } from '../../styles/auth/auth-text';
import s from './AuthForm.module.css';
import Text from '../Text/Text';
import Button from '../Button/Button';

const AuthForm = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful },
    } = useForm();

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const onFormSubmit = data => {
        console.log(data)
    };

    return (
        <div className={s.container}>
            <Text
                style={textPrimary}
                children='You can use your Google Account to authorize:'
            />
            <Button
                style={authButtonForm}
                children='Google'
                aria-label='Log in'
            />
            <Text
                style={textSecondary}
                children='Or login to our app using e-mail and password:'
            />
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <ul>
                    <li>
                        <ul>
                            <li>
                                <input
                                    className={s.input}
                                    name='email'
                                    type="text"
                                    defaultValue="" {...register("email")}
                                    placeholder='E-mail'
                                    autoComplete="off"
                                />
                            </li>
                            <li>
                                <input
                                    className={s.input}
                                    name='password'
                                    type="text"
                                    defaultValue="" {...register("password")}
                                    placeholder='Password'
                                    autoComplete="off"
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ul className={s.list}>
                            <li className={s.item}>
                                <Button
                                    style={activeButtonForm}
                                    children='Sign in'
                                    aria-label='Sign in'
                                />
                            </li>
                            <li className={s.item}>
                                <Button
                                    style={buttonForm}
                                    children='Sign up'
                                    aria-label='Sign up'
                                />
                            </li>
                        </ul>
                    </li>
                </ul>
            </form>
        </div>
    )
}
    
export default AuthForm;