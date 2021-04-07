import s from './AuthPage.module.css';
import Title from '../../components/Title/Title.jsx';
import AuthText from '../../components/AuthText/AuthText.jsx';
import AuthForm from '../../components/AuthForm/AuthForm.jsx';


const AuthView = () => {
    return (
        <>
            <section className={s.section}>
                <Title children='Pro Test' />
                <AuthText/>
                <AuthForm />
            </section>
        </>
    )
}

export default AuthView;