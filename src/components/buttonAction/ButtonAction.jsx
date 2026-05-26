import React from 'react';
import classes from './ButtonAction.module.css';

const ButtonAction = ({ buttonName, onClick }) => {
  return (
      <button onClick={onClick} className={classes.buttonAction}>{buttonName}</button>

  );
}

export default ButtonAction;
