import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { authSelectors } from 'redux/auth';

export function PublicRoute({ children, redirected = false, redirectTo = '/', ...routeProps }) {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
    
    return (
        <Route {...routeProps}>
            {redirected && isLoggedIn ? <Redirect to={redirectTo}/> : children}
        </Route>
    )
}