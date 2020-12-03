import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login';
import Main from './page/Main';
import Register from './page/Register';



const appRouting = (
    <Router>
    <Switch>
      <Route exact path="/">
        <Main />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>
);

if (!window.location.hash || window.location.hash === '#/') {
  window.location.hash = '#/';
}



ReactDOM.render(
  appRouting,
  document.getElementById('root')
);

