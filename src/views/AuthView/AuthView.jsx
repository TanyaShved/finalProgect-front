import s from './AuthView.module.css';
import Title from '../../components/Title/Title.jsx';
import AuthText from '../../components/AuthText/AuthText.jsx';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';

const AuthView = () => {
    
    return (
        <>
            <section className={s.section}>
                <Title children='Pro Test' />
                <AuthText />
                <AuthForm
                    message='Or login to our app using e-mail and password:' />
            </section>
        </>
    )
}

export default AuthView;