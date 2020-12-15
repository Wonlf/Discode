import React from 'react';



const Input = ({ setMessage, sendMessage, message }) => (
  <form className="form">
    <input
      className="chat-input-in"
      type="text"
      placeholder="메시지 보내기"
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    {/* <button className="sendButton" onClick={e => sendMessage(e)}>Send</button> */}
  </form>
)

export default Input;