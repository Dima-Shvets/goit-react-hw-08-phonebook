import { Route, Switch } from 'react-router-dom';

import { AppHeader } from 'components/AppHeader';
import { ContactsView } from 'views/ContactsView';
import { LogInView } from 'views/LogInView/LogInView';
import { SignInView } from 'views/SignInView/SignInView';

import './common-style.scss';
import './App.scss';



function App() {
  
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
        <SignInView/> 
        </Route>
        <Route>
            <p>Not Found</p>
        </Route>
      </Switch>
    </>
  );
}

export default App;
