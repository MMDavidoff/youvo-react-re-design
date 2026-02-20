import React from 'react';
import classes from './ChatBubbleOpponent.module.css';

const ChatBubbleOpponent = ({chatBubbleOpponent}) => {
  return (
    <div className={classes.chatBubbleOpponentFlex}>
            <div className={classes.userLogoOpponent}></div>
            <div className={classes.ChatBubbleOpponent}>{chatBubbleOpponent}</div>
    </div>
  );
}

export default ChatBubbleOpponent;
