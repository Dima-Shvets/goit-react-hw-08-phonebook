import { useSelector } from 'react-redux';

import { AuthMenu } from '../AuthMenu';
import { UserMenu } from 'components/UserMenu';
import { authSelectors } from 'redux/auth';


export function AppHeader() {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return (
        <header>
            {isLoggedIn ? 
            <UserMenu />
            : <AuthMenu />}
        </header>
    )
} 