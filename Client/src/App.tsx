import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import Login from './page/Login/Login';
import Register from './page/Register/Register';
import CreateRoom from './page/Video/CreateRoom';
import Room from './page/Video/Room';
import Chat from './page/Chat/Chat';
import Friends from './page/Friends/Friends';


import Sidebar from './components/Sidebar/Sidebar';
import ControlBox from './components/ControlBox/ControlBox';


// import './App.scss';

export default withRouter(function App() {
  

  
  // let side = <Sidebar/>;


   const [data, setData] = useState(null);
   const [data2, setData2] = useState(null);


  // useEffect(() => {
  //   // 브라우저 API를 이용하여 문서 타이틀을 업데이트합니다.
  //     if (window.location.hash === '#/' || window.location.hash === '#/login' || window.location.hash === '#/register') {
  //     setData('')
      
  //   }
  //   else {
  //     setData(<Sidebar/>)
  //   }
  // }, [window.location.hash]);

  

  // let container = 

  // if (!window.location.hash || window.location.hash === '#/') {
  //   window.location.hash = '#/';
  // }

    

  //  useEffect(() => {
  //     return history.listen((location) => { 
  //        console.log(`You changed the page to: ${location.pathname}`) 
  //     }) 
  
  //  },[history]) 

  


      const [currentPath, setCurrentPath] = useState(window.location.hash);

    useEffect(() => {
      if (window.location.hash === '#/' || window.location.hash === '#/login' || window.location.hash === '#/register') {
      setData('')
      setData2('')
    }

    else if(window.location.hash === '#/friends'){
      setData(<Sidebar friends="active" servers=""/>)
      setData2(<ControlBox/>)
    }
    else {
      setData(<Sidebar friends="" servers="active"/>)
      setData2(<ControlBox/>)
    }

      const { hash } = window.location;
      // console.log("New path:", window.location.hash);
      setCurrentPath(hash);
    }, [window.location.hash]);



    
   

  
  

  return (

    <Router>
      <main className="container">
        {data}
        {data2}

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
})
