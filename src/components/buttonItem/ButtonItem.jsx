import React from 'react';
import classes from "./buttonItem.module.css"

const ButtonItem = ({name , logo , background , className}) => {
  return (
    <div style={{background}} className={`${classes.mainButton} ${className || ''}`}>
      <h2>{name}</h2>
      <img src={logo} alt="" />
    </div>
  );
}

export default ButtonItem;
