import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './page/Login/Login';
import Register from './page/Register/Register';
import CreateRoom from './page/Video/CreateRoom';
import Room from './page/Video/Room';
import Chat from './page/Chat/Chat';
import Friends from './page/Friends/Friends';

import Sidebar from './components/Sidebar/Sidebar';


import './App.scss';

function App() {

  let side = <Sidebar/>;


  const [data, setData] = useState(null);


  useEffect(() => {
    // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
      if (window.location.hash === '#/' || window.location.hash === '#/login' || window.location.hash === '#/register') {
      setData('')
      
    }
    else {
      setData(<Sidebar/>)
    }
  }, []);

  

  // let container = 

  // if (!window.location.hash || window.location.hash === '#/') {
  //   window.location.hash = '#/';
  // }

  

  console.log(window.location.hash)

    
    

  
  

  return (

    <Router>
      <main className="container">
        <Sidebar/>

         <Switch>
      <Route path="/register" component={Register}/>
      
      <Route path="/createroom" component={CreateRoom}/>
   
      <Route path="/room/:roomID" component={Room}/>
   
      <Route path="/chat" component={Chat}/>
 
      <Route path="/friends" component={Friends}/>
      
      <Route exact path="/" component={Login}/>
      

    </Switch>

      </main>
  

      
   
  </Router>

  );
}



export default App;
