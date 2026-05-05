import React from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonAction from '../buttonAction/ButtonAction';
import classes from './TopBarAction.module.css';
import { ROUTES } from '../../routes/routes.const';

const TopBarAction = () => {
  const navigate = useNavigate();

  return (
    <div className={classes.topBarAction}>
      <ButtonAction onClick={() => navigate(ROUTES.MAIN)} buttonName="Clubs" />
      <ButtonAction onClick={() => navigate(ROUTES.CHAT)} buttonName="Chat" />
    </div>
  );
}

export default TopBarAction;
        