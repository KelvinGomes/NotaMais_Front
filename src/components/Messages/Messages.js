import React from 'react';

import ScrollToBottom from 'react-scroll-to-bottom';

import Message from '../Message/Message';

import './Messages.css';

const Messages = ({ messages, name, id }) => (
  <ScrollToBottom className="messages" >
    {messages.map((message, index) => (
      <div key={index} className="messages">
        <Message 
          message={message}
          name={name}
          id={id}
        />
      </div>
    ))}
  </ScrollToBottom>
);

export default Messages;
