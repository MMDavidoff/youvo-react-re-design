import React from 'react';
import classes from './ChatBubble.module.css';

const ChatBubble = ({chatBubble}) => {
  return (
    <div className={classes.chatBubbleFlex}>
      <div className={classes.chatBubble}>{chatBubble}</div>
      <div className={classes.userLogo}></div>
    </div>
  );
}

export default ChatBubble;
