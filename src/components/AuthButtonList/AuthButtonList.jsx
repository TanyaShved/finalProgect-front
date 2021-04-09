import s from './AuthButtonList.module.css';
import { buttonSignIn, buttonSignUp } from '../../styles/auth/auth-button';
import { buttons } from '../../initial/buttons-names';
import Button from '../Button/Button';

const AuthButtonList = () => {
    const { SIGN_IN, SIGN_UP} = buttons

    return (
        <ul className={s.list}>
            <li className={s.listItem} key={SIGN_IN}>
                    <Button
                    style={buttonSignIn}
                    name={SIGN_IN}
                    children={SIGN_IN}
                    aria-label={SIGN_IN}
                />
            </li>
            <li key={SIGN_UP}>
                    <Button
                    style={buttonSignUp}
                    name={SIGN_UP}
                    children={SIGN_UP}
                    aria-label={SIGN_UP}/>
            </li>
        </ul>)
}
    
export default AuthButtonList;