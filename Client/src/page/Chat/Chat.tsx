import React, { useState, useEffect, Fragment } from "react";
import queryString from 'query-string';
import io from "socket.io-client";
import ScrollToBottom from 'react-scroll-to-bottom';



import Messages from '../../components/Messages/Messages';

import Input from '../../components/Input/Input';

import Sidebar from "../../components/Sidebar/Sidebar";

import ControlBox from "../../components/ControlBox/ControlBox";

import './Chat.scss';


const ENDPOINT = 'http://192.168.3.66:5500/';

let socket;

function Chat() {


  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(window.location.hash.split('#/chat')[1]);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name)

    socket.emit('join', { name, room }, (error) => {
      if(error) {
        alert(error);
      }
    });
  }, [ENDPOINT, window.location.hash.split('#/chat')[1]]);
  
  useEffect(() => {
    socket.on('message', message => {
      setMessages(messages => [ ...messages, message ]);
    });
    
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
}, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  

  return (
    


  <Fragment>

 
	

     <div className="channels">
        <header className="channels-header focusable">
          <div className="channel-head">
          <h3 className="channels-header-name">My Server</h3>
          <svg  aria-label="Dropdown" className="channels-header-dropdown">
            <use xlinkHref="#icon-dropdown" />
            </svg>
            </div>
        </header>
            
        <section className="channels-list">
          <header className="channels-list-header focusable">
            <h5>Text Channels</h5>
          </header>
          
          <ul className="channels-list-text">
            <li className="channel focusable channel-text active">
              <span className="channel-name">general</span>
              <button className="button"  aria-label="Invite">
                <svg><use xlinkHref="#icon-invite" /></svg>
                </button>
              <button className="button"  aria-label="settings">
                <svg><use xlinkHref="#icon-channel-settings" /></svg>
                </button>
            </li>
            
            <li className="channel focusable channel-text">
              <span className="channel-name">help</span>
              <button className="button"  aria-label="Invite">
                <svg><use xlinkHref="#icon-invite" /></svg>
                </button>
              <button className="button"  aria-label="settings">
                <svg><use xlinkHref="#icon-channel-settings" /></svg>
                </button>
            </li>
          </ul>
          
          <header className="channels-list-header focusable">
            <h5>Voice Channels</h5>
          </header>
        </section>
        
      

      </div>

      
        
		
	<div className="vert-container">
		<menu type="toolbar" className="menu">
			<h2 className="menu-name">general</h2>
		</menu>
    
		
		<ScrollToBottom className="chat">
      <Messages messages={messages} name={name} />
		</ScrollToBottom>

    <div className="chat-bar-bottom">
      <div className="chat-input">
        <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
    </div>
	</div>









           <svg id="icon-dropdown" viewBox="0 0 18 18"><style dangerouslySetInnerHTML={{__html: ".dd{stroke:#ABADAF;stroke-width:2px;stroke-dashoffset:1;stroke-dasharray:inherit}" }} /><path className="dd" stroke="#FFF" d="M4.5 4.5l9 9" strokeLinecap="round" /><path className="dd" stroke="#FFF" d="M13.5 4.5l-9 9" strokeLinecap="round" /></svg>
        <svg id="icon-invite" viewBox="0 0 16 16"><path fill="#fff" d="M6.3,3.4L8,1.7v9.8C8,11.8,8.2,12,8.5,12C8.8,12,9,11.8,9,11.5V1.7l1.7,1.7c0.2,0.2,0.5,0.2,0.7,0c0.2-0.2,0.2-0.5,0-0.7L8.9,0.2c0,0,0,0,0-0.1C8.8,0,8.6,0,8.5,0c0,0,0,0,0,0c0,0,0,0,0,0C8.4,0,8.2,0,8.1,0.1c0,0,0,0,0,0.1L5.6,2.7c-0.2,0.2-0.2,0.5,0,0.7C5.8,3.5,6.1,3.5,6.3,3.4z M14,4h-1.5v1h1C13.8,5,14,5.2,14,5.5v9c0,0.3-0.2,0.5-0.5,0.5h-10C3.2,15,3,14.8,3,14.5v-9C3,5.2,3.2,5,3.5,5h1V4H3C2.4,4,2,4.4,2,5v10c0,0.6,0.4,1,1,1h11c0.6,0,1-0.4,1-1V5C15,4.4,14.6,4,14,4z" /></svg>
        <svg id="icon-channel-settings" viewBox="0 0 16 16"><path fill="#fff" d="M8,5C6.3,5,5,6.3,5,8c0,1.7,1.3,3,3,3c1.7,0,3-1.3,3-3 C11,6.3,9.7,5,8,5z M8,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C10,9.1,9.1,10,8,10z M16,8c0-1-0.8-1.9-1.8-2 c-0.1-0.3-0.3-0.7-0.4-1c0.7-0.8,0.6-1.9-0.1-2.7c-0.7-0.7-1.9-0.8-2.7-0.1c-0.3-0.2-0.6-0.3-1-0.4C9.9,0.8,9,0,8,0 C7,0,6.1,0.8,6,1.8C5.7,1.9,5.3,2.1,5,2.2C4.2,1.6,3.1,1.6,2.3,2.3C1.6,3.1,1.6,4.2,2.2,5C2.1,5.3,1.9,5.7,1.8,6C0.8,6.1,0,7,0,8 c0,1,0.8,1.9,1.8,2c0.1,0.3,0.3,0.7,0.4,1c-0.7,0.8-0.6,1.9,0.1,2.7c0.7,0.7,1.9,0.8,2.7,0.1c0.3,0.2,0.6,0.3,1,0.4 C6.1,15.2,7,16,8,16c1,0,1.9-0.8,2-1.8c0.3-0.1,0.7-0.3,1-0.4c0.8,0.7,1.9,0.6,2.7-0.1c0.7-0.7,0.8-1.9,0.1-2.7 c0.2-0.3,0.3-0.6,0.4-1C15.2,9.9,16,9,16,8z M13.4,9c-0.1,0.8-0.5,1.5-0.9,2.1l0.4,0.4c0.4,0.4,0.4,1,0,1.4c-0.4,0.4-1,0.4-1.4,0 l-0.4-0.4C10.5,13,9.8,13.3,9,13.4V14c0,0.6-0.4,1-1,1c-0.6,0-1-0.4-1-1v-0.6c-0.8-0.1-1.5-0.5-2.1-0.9l-0.4,0.4 c-0.4,0.4-1,0.4-1.4,0c-0.4-0.4-0.4-1,0-1.4l0.4-0.4C3,10.5,2.7,9.8,2.6,9H2C1.4,9,1,8.6,1,8c0-0.6,0.4-1,1-1h0.6 C2.7,6.2,3,5.5,3.5,4.9L3.1,4.5c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l0.4,0.4C5.5,3,6.2,2.7,7,2.6V2c0-0.6,0.4-1,1-1 c0.6,0,1,0.4,1,1v0.6c0.8,0.1,1.5,0.5,2.1,0.9l0.4-0.4c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4l-0.4,0.4C13,5.5,13.3,6.2,13.4,7 H14c0.6,0,1,0.4,1,1c0,0.6-0.4,1-1,1H13.4z" /></svg>
        
       </Fragment>

  );
}

export default Chat;
