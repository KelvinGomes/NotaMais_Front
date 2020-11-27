import React from 'react';

import './Input.css';

const Input = ({ message,  setMessage,  sendMessage }) => (
  <form className="form">
    <input
      className="input"
      type="text"
      placeholder="Digite aqui..."
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => event.key === 'Enter' && sendMessage(event)}
    />
    <button 
      className="sendButton"
      onClick={event => sendMessage(event)}
    >Enviar <i class="ml-1 fa fa-paper-plane fa-lg" aria-hidden="true"></i>
    </button>
  </form>
);

export default Input;
