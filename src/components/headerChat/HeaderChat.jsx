import React from 'react';
import classes from './HeaderChat.module.css';

const HeaderChat = () => {
  return (
    <div className={classes.headerChat}>
      <p className={classes.chatName}>Alexey</p>
      <div className={classes.circle}></div>
      <p className={classes.status}>Online</p>
    </div>

  );
}

export default HeaderChat;
