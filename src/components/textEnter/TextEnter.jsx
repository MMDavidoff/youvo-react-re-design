import React from 'react';
import classes from './TextEnter.module.css';

const TextEnter = () => {
  return (
      <input className={classes.textEnter} type="text" placeholder="Type a message..." />
  );
}

export default TextEnter;

