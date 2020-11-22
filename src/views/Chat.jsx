import React, { useState, useEffect } from 'react';
import MessageCard from 'components/MessageCard';
import Messages from 'components/Messages/Messages';
import Input from 'components/Input/Input';
import { Link } from 'react-router-dom';

import './Chat.css';


const Chat = () => {
  const [name, setName] = useState('Dara');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);


  useEffect(() => {
    const text = 'Oiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii';
    const msg = [
      {
        user: 'Kelvin',
        text
      },
      {
        user: 'Dara',
        text
      }
    ];
    setMessages([...msg]);
  }, []);

  const sendMessage = event => {
    event.preventDefault();

    console.log(message);

    if (message) {
      setMessages([...messages, {user: 'Dara', text: message}]);
      // socket.emit('sendMessage', message, () => setMessage(''));
    }
  }

  return (
    <>
    <div className="ml-5 mt-2 mb-3">
      <h2 style={{ color: '#0F1448' }}>MENSAGENS - KELVIN GOMES</h2>
      <Link to="/admin/detalhes_prestador/75" style={{ color: '#000' }}>
              <i className="fa fa-arrow-left fa-2x"></i>
            </Link>
    </div>

    <div className="outerContainer">
      <div className="container">
          {/* <InfoBar room={room} /> */}
          <Messages messages={messages} name={name} />
          <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
      </div>
      {/* <TextContainer users={users}/> */}
    </div>
    </>
  );


  return (
    <div className="ml-5 mt-2">
      <h2 style={{ color: '#0F1448' }}>MENSAGENS - KELVIN GOMES</h2>
      {/* <div className="content"> */}
      {/* <div style={styles.outerContainer}>
      <div style={styles.container}> */}
        <Messages
          name="Dara"
          messages={messages}
        />
        <hr />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      {/* </div>
      </div> */}

      {/* <div className="row">
          <div className="col-1">
            <Link to="/admin/detalhes_prestador/75" style={{ color: '#000' }}>
              <i className="fa fa-arrow-left fa-2x"></i>
            </Link>

          </div>
          <div className="col">
            {
              messages.map((msg, index) => (
                <MessageCard key={index} {...msg} />)
              )
            }
          </div>
        </div> */}
    </div>

  );
}

export default Chat;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderRadius: '8px', 
    // width: '35%'
    height:'100%'
  },
  outerContainer: {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'start',
  height: '100%',
  width: '100vmin'
},
  end: {
    position:' absolute',
    bottom: 0
    }

}
