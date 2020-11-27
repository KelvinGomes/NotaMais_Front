import React, { useState, useEffect } from 'react';
import Messages from 'components/Messages/Messages';
import Input from 'components/Input/Input';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Chat.css';


const Chat = props => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const [user, setUser] = useState({ id: 0, name: '' });

  useEffect(() => {
    const id = Number(localStorage.getItem('id'));
    const name = localStorage.getItem('name');
    const token = localStorage.getItem('token');
    setUser({ id, name });

    const { orderId } = props.match.params;

    axios.defaults.headers.common = { 'Authorization': `bearer ${token}` }
    axios.get(`https://notamais-backend01.herokuapp.com/orders/${orderId}`)
      .then(res => {
        console.log(res);        
      })
      .catch((error) => {
        // window.alert("Erro: todos os campos são de preechimento obrigatório!");
      });
    axios.get(`https://notamais-backend01.herokuapp.com/offers/${orderId}`)
      .then(res => {
        console.log(res);        
      })
      .catch((error) => {
        // window.alert("Erro: todos os campos são de preechimento obrigatório!");
      });

    updateChat();
    // setInterval(updateChat, 1000);
  }, []);
  
  const sendMessage = event => {
    event.preventDefault();
    if (message) {
      setMessages([...messages, { user, text: message }]);
      const obj = {
        messages: [{
          sender: user,
          message
        }]
      }
      const { orderId } = props.match.params; 
      axios.put(`http://localhost:3535/chat/${orderId}`)
        .then(res => console.log(res))
        .catch(res => console.log(res));
      console.log(obj);
      setMessage('');
    }
  }
  
  const updateChat = () => {
    const { orderId } = props.match.params;
    axios.get(`http://localhost:3535/chat/${orderId}`).then(({ data }) => {
      console.log(data);
      const msgs = data.messages.map(msg => {
        const user = msg.sender;
        const text = msg.message;
        return { user, text };
      });
      setMessages([...msgs]);
    });
  }

  return (
    <>
      <div className="ml-5 mt-2 mb-3">
        <h2 style={{ color: '#0F1448' }}>MENSAGENS - KELVIN GOMES</h2>
        <Link to={`/admin/detalhes_prestador/${props.match.params.orderId}`} style={{ color: '#000' }}>
          <i className="fa fa-arrow-left fa-2x"></i>
        </Link>
      </div>

      <div className="outerContainer">
        <div className="container">
          <Messages messages={messages} name={user.name} id={user.id} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
        </div>
      </div>
    </>
  );
}

export default Chat;
