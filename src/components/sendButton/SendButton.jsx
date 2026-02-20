import React from 'react';
import classes from './SendButton.module.css';

const SendButton = () => {
  return (

      <button className={classes.sendButton}><img src="image/telegramsendmessage.png" alt="" width={80} height={80} /></button>
  );
}

export default SendButton;
