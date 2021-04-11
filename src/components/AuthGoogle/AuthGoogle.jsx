import s from './AuthGoogle.module.css';
import { buttons } from 'initial/buttons-names';
import Button from 'components/Button';
import sprite from 'images/sprite.svg';

const AuthGoogle = () => {
    const { GOOGLE } = buttons

    return (
        <div className={s.container}>
            <p className={s.text}>
                You can use your Google Account to authorize:
            </p>
            <Button
                className={s.button}
                aria-label={GOOGLE}
            >
                <svg className={s.icon}>
                    <use href={sprite + '#icon-google'}/>
                </svg>
                {GOOGLE}
            </Button>
        </div>
    )
}

export default AuthGoogle;