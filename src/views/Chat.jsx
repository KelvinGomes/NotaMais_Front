import React from 'react';
import MessageCard from 'components/MessageCard';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <div className="ml-5 mt-2">
      <h2 style={{ color: '#0F1448' }}>MENSAGENS - KELVIN GOMES</h2>
      <div className="content">
        <div className="row">
          <div className="col-1">
            <Link to="/admin/detalhes_prestador/75" style={{color: '#000'}}>
              <i className="fa fa-arrow-left fa-2x"></i>
            </Link>

          </div>
          <div className="col">
            <MessageCard 
              name="KELVIN GOMES" 
              text="Boa tarde! Tudo bom?
              Gostaria de tirar uma dúvida.llllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll" 
              user="DARA MARIANO" 
              currentUser="true" 
            />

          </div>
        </div>
      </div>
    </div>

  );
}

export default Chat;
