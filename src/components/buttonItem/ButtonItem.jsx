import React from 'react';
import classes from "./buttonItem.module.css"

const ButtonItem = ({name , logo , background}) => {
  return (
    <div style={{background}} className={classes.mainButton}>
      <h2>{name}</h2>
      <img src={logo} alt="" />
    </div>
  );
}

export default ButtonItem;
