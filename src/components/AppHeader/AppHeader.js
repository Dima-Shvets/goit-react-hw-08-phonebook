import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthMenu } from '../AuthMenu';
import { UserMenu } from 'components/UserMenu';
import { authSelectors } from 'redux/auth';

import { ReactComponent as Logo } from './page-logo.svg';

import s from './AppHeader.module.scss';


export function AppHeader() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    return (
        <header className={s.AppHeader}>
            <div className={s.logo}>
            <Logo title='logo' width='20' fill='#002f6c'/>
                <span className={s.text}>PhoneBook</span>
            </div>
            {isLoggedIn ? 
            <UserMenu />
            : <AuthMenu />}
        </header>
    )
} 