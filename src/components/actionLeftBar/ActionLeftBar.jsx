import React from "react";
import classes from "./ActionLeftBar.module.css";
import ButtonMode from "../buttonMode/ButtonMode";

const ActionLeftBar = () => {
  return <div className={classes.actionLeftBar}>
    <div className={classes.buttonModeContainer}>
    <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
     <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
      <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
       <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
       </div>
      <div className={classes.bottomContainer}>
        <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
        <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
        <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
      </div>


  </div>;
  
};

export default ActionLeftBar;
