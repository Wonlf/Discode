import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user }, name }) => {

  let today = new Date();   

  let year = today.getFullYear(); // 년도
  let month = today.getMonth() + 1;  // 월
  let date = today.getDate();  // 날짜
  let day = today.getDay();  // 요일

  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyStart">
          <img src="https://monsterratdata.s3.ap-northeast-2.amazonaws.com/a.png" aria-hidden="true" className="avatar" alt=" "/>  
          <div className="messageBox">
            <p className="sentText">{trimmedName} <span className="time_set">{year}.{month}.{date}.</span></p>
            <p className="messageText">{text}</p>
          </div>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <img src="https://monsterratdata.s3.ap-northeast-2.amazonaws.com/a.png" aria-hidden="true" className="avatar" alt=" "/>
            <div className="messageBox">
              <p className="sentText">{user} <span className="time_set">{year}.{month}.{date}.</span></p>
              <p className="messageText">{(text)}</p>
            </div>
            
          </div>
        )
  );
}

export default Message;