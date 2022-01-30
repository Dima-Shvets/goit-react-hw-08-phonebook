import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';
import { AppHeader } from 'components/AppHeader';
import { ContactsView } from 'views/ContactsView';
import { LogInView } from 'views/LogInView/LogInView';
import { SignUpView } from 'views/SignUpView/SignUpView';

import { authOperations, authSelectors } from 'redux/auth';

import './common-style.scss';
import './App.scss';




function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  
  return (
    !isFetchingCurrentUser && (
    <> 
      <AppHeader />
      <Switch>
      <PrivateRoute redirectTo='/login' path="/" exact>
      <ContactsView/> 
      </PrivateRoute>
      <PublicRoute redirected path="/login">
        <LogInView/>
      </PublicRoute>
      <PublicRoute redirected path="/signin">
        <SignUpView/> 
      </PublicRoute>
      <Route>
            <p>Not Found</p>
      </Route>
      </Switch>
    </>
    )
  )
  
}

export default App;
