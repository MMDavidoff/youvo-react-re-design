import React from "react";
import classes from "./ActionLeftBar.module.css";
import ButtonMode from "../buttonMode/ButtonMode";
import { useTheme } from "../../context/ThemeContext";

const ActionLeftBar = () => {
  const { theme, toggleTheme } = useTheme();

  return <div className={classes.actionLeftBar}>
    <div className={classes.buttonModeContainer}>
    <ButtonMode modeIcon="image/bookmark.svg" modeAlt="Mode" />
     <ButtonMode modeIcon="image/folder.svg" modeAlt="Mode" />
      <ButtonMode modeIcon="image/users.svg" modeAlt="Mode" />
       <ButtonMode modeIcon="image/archive.svg" modeAlt="Mode" />
       </div>
      <div className={classes.bottomContainer}>
        <ButtonMode modeIcon="image/bell.svg" modeAlt="Mode" />
        <ButtonMode
          modeIcon={theme === "light" ? "image/sun.svg" : "image/moon.svg"}
          modeAlt="Toggle theme"
          onClick={toggleTheme}
          isActive={theme === "light"}
        />
        <ButtonMode modeIcon="image/settings.svg" modeAlt="Mode" />
      </div>


  </div>;
  
};

export default ActionLeftBar;
