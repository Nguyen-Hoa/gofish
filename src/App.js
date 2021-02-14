import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SessionProvider, sessionReducer } from './db/session';

import './App.css';
import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const App = () => {
  const [state, dispatch] = React.useReducer(sessionReducer, { user: null })
  console.log(state);
  return (
    <BrowserRouter className="App">
      <SessionProvider value={{ state, dispatch }}>
        <Switch>
          <Route exact path='/' component={Login}/>
          <Route exact path='/sign-up' component={SignUp}/>
          <Route exact path='/dashboard' component={Dashboard}/>
        </Switch>
      </SessionProvider>
    </BrowserRouter>
  );
}

export default App;
