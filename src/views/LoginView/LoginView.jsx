import s from './LoginView.module.css';
import Title from '../../components/Title/Title.jsx';
import AuthText from '../../components/AuthText/AuthText.jsx';
import AuthNav from '../../components/AuthNav';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';

const AuthView = () => {
    
    return (
        <>
            <section className={s.section}>
                <Title children='Pro Test' />
                <AuthText />
                <AuthNav/>
                <AuthForm
                    message='Or login to our app using e-mail and password:' />
            </section>
        </>
    )
}

export default AuthView;