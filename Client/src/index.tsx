import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login/Login';
import Main from './page/Home/Main';
import Register from './page/Register/Register';
import CreateRoom from './page/Video/CreateRoom';
import Room from './page/Video/Room';
import Chat from './page/Chat/Chat';
import Join from './components/Join/Join.tsx';



const appRouting = (
    <Router>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/createroom">
        <CreateRoom />
      </Route>
      <Route path="/room/:roomID">
        <Room />
      </Route>
      <Route path="/chat">
        <Chat />
      </Route>
      <Route path="/join">
        <Join />
      </Route>

      <Route exact path="/">
        <Main />
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

