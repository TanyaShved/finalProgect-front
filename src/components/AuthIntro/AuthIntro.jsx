import s from './AuthIntro.module.css';

const AuthIntro = () => {
    
    return (
        <div className={s.container}>
            <h1 className={s.title}>Pro Test</h1>
            <p className={s.text}>
                <b>[ </b>
                    We will help you find weak points in knowledge so that you can strengthen it.
                    We will show you what is relevant to know for a <b>QA Engineer</b> and will try to make
                    the learning process more diverse_ <b>]
                </b>
            </p>
        </div>
    )
}

export default AuthIntro;