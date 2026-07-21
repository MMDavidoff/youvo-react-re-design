import React from 'react';
import classes from './ChatBubble.module.css';

const ChatBubble = ({chatBubble, messageTime}) => {
  return (
    <div className={classes.chatBubbleFlex}>
      <div className={classes.chatBubble}>
        <p className={classes.bubbleText}>{chatBubble}</p>
        <p className={classes.bubbleTime}>{messageTime}</p>
      </div>
      <div className={classes.userLogo}></div>
    </div>
  );
}

export default ChatBubble;
