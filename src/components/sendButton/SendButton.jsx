import React from 'react';
import classes from './SendButton.module.css';

const SendButton = () => {
  return (

      <button className={classes.sendButton}><img src="/image/send.svg" alt="Send" width={26} height={26} /></button>
  );
}

export default SendButton;
