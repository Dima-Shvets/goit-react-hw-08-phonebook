import { Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

import { AppHeader } from 'components/AppHeader';
import { ContactsView } from 'views/ContactsView';
import { LogInView } from 'views/LogInView/LogInView';
import { SignUpView } from 'views/SignUpView/SignUpView';

import { authOperations } from 'redux/auth';

import './common-style.scss';
import './App.scss';




function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser())
  })
  
  return (
    <>
      <AppHeader />
      <Switch>
      <Route path="/" exact>
        <ContactsView/> 
      </Route>
      <Route path="/login">
        <LogInView/> 
      </Route>
      <Route path="/signin">
        <SignUpView/> 
        </Route>
        <Route>
            <p>Not Found</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
