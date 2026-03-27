import React from 'react';
import ButtonMain from '../buttonMain/ButtonMain';
import classes from './RegisterMenu.module.css';
import LogoYouvo from '../logoYouvo/logoYouvo';

const RegisterMenu = ({signTitle}) => {
  return (
    <div className={classes.signMenu}>
      <form className={classes.form}>
        <h2 className={classes.header}>Log In</h2>
        <input type="text" placeholder={"Enter Username"} />
        <input type="password"placeholder={"Enter Password"} />
      
      <button className={classes.signUpButton}>Log In</button>
      </form>
    </div>
  );
}

export default RegisterMenu;
