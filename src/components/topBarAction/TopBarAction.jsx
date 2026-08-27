import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAction from '../buttonAction/ButtonAction';
import classes from './TopBarAction.module.css';
import { ROUTES } from '../../routes/routes.const';
import { useTheme } from '../../context/ThemeContext';

const TopBarAction = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classes.topBarAction}>
      <ButtonAction onClick={() => navigate(`/${ROUTES.MAIN}`)} buttonName="Clubs" />
      <ButtonAction onClick={() => navigate(`/${ROUTES.NEWCHAT}`)} buttonName="Chat" />
      <button className={classes.themeToggle} onClick={toggleTheme}>
        <img
          src={theme === "light" ? "/image/sun.svg" : "/image/moon.svg"}
          alt="Toggle theme"
          width="20"
          height="20"
        />
      </button>
    </div>
  );
}

export default TopBarAction;
        