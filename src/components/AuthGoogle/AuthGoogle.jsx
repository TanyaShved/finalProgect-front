import s from './AuthGoogle.module.css';
import { buttons } from 'initial/buttons-names';
import { googleURL } from 'constants.js';
import sprite from 'images/sprite.svg';

const AuthGoogle = () => {
    const { GOOGLE } = buttons

    return (
        <div className={s.container}>
            <p className={s.text}>
                You can use your Google Account to authorize:
            </p>
            <a
                className={s.link}
                href={googleURL}
                aria-label={GOOGLE}
            >
                <svg className={s.icon}>
                    <use href={sprite + '#icon-google'} />
                </svg>
                {GOOGLE}
            </a>
        </div>
    )
}

export default AuthGoogle;