/* global fetch */
import React, { useState, useEffect } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Login from './components/Login/Login.jsx';
import SignUp from './components/SignUp/SignUp.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <BrowserRouter className="App">
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/sign-up' component={SignUp}/>
        <Route exact path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
