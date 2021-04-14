import { useDispatch } from 'react-redux';
import s from './LoginView.module.css';
import authOperations from 'redux/auth/auth-operations';
import AuthIntro from 'components/AuthIntro';
import AuthNav from 'components/AuthNav';
import AuthGoogle from 'components/AuthGoogle';
import AuthForm from 'components/AuthForm';

const LoginView = () => {
    const dispatch = useDispatch()

    const onFormSubmit = (data) => {
        const user = {
            email: data['E-mail'],
            password: data['Password']
        }
        dispatch(authOperations.logIn(user));
    };
    
    return (
        <section className={s.section}>
            <AuthIntro />
            <div className={s.container}>
                <AuthNav />
                <AuthGoogle />
                <AuthForm onFormSubmit={onFormSubmit}/>
            </div>
        </section>
    )
}

export default LoginView;