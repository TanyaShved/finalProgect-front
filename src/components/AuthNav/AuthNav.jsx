import { NavLink } from 'react-router-dom';
import s from './AuthNav.module.css';
import { routes } from '../../initial/routes-names';
import { buttons } from '../../initial/buttons-names';

const AuthNav = () => {
    const { LOGIN } = routes
    const { SIGN_IN, SIGN_UP } = buttons

    return (
        <ul className={s.list}>
            {Object.values(routes).map(route => (
                <li className={s.listItem} key={route}>
                    <NavLink
                        className={s.link}
                        activeClassName={s.activeLink}
                        exact to={route}>
                        {route === LOGIN ? SIGN_IN : SIGN_UP}
                    </NavLink>
                </li>
            ))}
        </ul>
    )
}
    
export default AuthNav;