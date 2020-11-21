import React from 'react';

import './styles.css';

const MessageCard = ({name, text, user, currentUser}) => {

  return (
    currentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{name}</p>
          <div className="messageBox backgroundBlue">
            <p className="messageText colorWhite">{text}</p>
          </div>
        </div>
      ): (
        <div className="messageContainer justifyStart">
        <div className="messageBox backgroundLight">
          <p className="messageText colorDark">{text}</p>
        </div>
        <p className="sentText pl-10">{user}</p>
      </div>
      )
  );
}

export default MessageCard;
