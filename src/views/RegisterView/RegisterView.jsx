import { useDispatch } from 'react-redux';
import s from './RegisterView.module.css';
import operations from 'redux/auth/auth-operations';
import AuthIntro from 'components/AuthIntro';
import AuthNav from 'components/AuthNav';
import AuthGoogle from 'components/AuthGoogle';
import AuthForm from 'components/AuthForm';

const RegisterView = () => {
    const dispatch = useDispatch()

    const onFormSubmit = (data) => {
        const newUser = {
            name: data['Name'],
            email: data['E-mail'],
            password: data['Password']
        }
        dispatch(operations.register(newUser));
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

export default RegisterView;