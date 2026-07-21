import React from 'react';
import classes from './ChatBubbleOpponent.module.css';

const ChatBubbleOpponent = ({chatBubbleOpponent, messageTime}) => {
  return (
    <div className={classes.chatBubbleOpponentFlex}>
            <div className={classes.userLogoOpponent}></div>
            <div className={classes.ChatBubbleOpponent}>
              <p className={classes.bubbleText}>{chatBubbleOpponent}</p>
              <p className={classes.bubbleTime}>{messageTime}</p>
            </div>
    </div>
  );
}

export default ChatBubbleOpponent;
