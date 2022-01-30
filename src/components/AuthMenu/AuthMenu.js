import {NavLink} from "react-router-dom";

import s from './AuthMenu.module.scss';

export function AuthMenu() {
    return (
        <div className={s.AuthMenu}>
        <NavLink className={s.link} activeClassName={s['active-link']} to="/signup">Sign Up</NavLink>
        <NavLink className={s.link} activeClassName={s['active-link']} to="/login">Log In</NavLink>
        </div>
    )
}
