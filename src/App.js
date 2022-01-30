import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

import { PrivateRoute } from 'components/PrivateRoute';
import { PublicRoute } from 'components/PublicRoute';

import { authOperations, authSelectors } from 'redux/auth';

import './common-style.scss';
import './App.scss';

import { AppHeader } from 'components/AppHeader';
import { Container } from 'components/Container';

const ContactsView = lazy(() =>
  import(
    'views/ContactsView' /* webpakcChunkName: "contacts-view" */
  )
);
const LogInView = lazy(() =>
  import(
    'views/LogInView/LogInView' /* webpakcChunkName: "contacts-login-view" */
  ),
);
const SignUpView = lazy(() =>
  import(
    'views/SignUpView/SignUpView' /* webpakcChunkName: "contacts-signup-view" */
  ),
);


function App() {
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrentUser);
  const dispatch = useDispatch();
 
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  }, [dispatch])
  
  return (
    <Container>
    {!isFetchingCurrentUser && (
    <>
      <AppHeader />
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <PrivateRoute redirectTo='/login' path="/" exact>
              <ContactsView/> 
            </PrivateRoute>
            <PublicRoute redirected path="/login">
              <LogInView/>s
            </PublicRoute>
            <PublicRoute redirected path="/signup">
              <SignUpView/> 
            </PublicRoute>
            <Route>
              <p>Not Found</p>
            </Route>
          </Switch>
        </Suspense>
    </>)
      }
    </Container>
  )
  
}

export default App;
