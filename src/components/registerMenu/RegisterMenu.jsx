import React from 'react';
import ButtonMain from '../buttonMain/ButtonMain';
import classes from './RegisterMenu.module.css';
import LogoYouvo from '../logoYouvo/logoYouvo';

const RegisterMenu = ({signTitle}) => {
  return (
    <div className={classes.signMenu}>
      <form className={classes.form}>
        <h2 className={classes.header}>{signTitle}</h2>
        <input type="text" placeholder={"Enter your name"} />
        <input type="email"placeholder={"Enter Email"} />
        <input type="password"placeholder={"Enter Password"} />
      <ButtonMain />
      </form>
    </div>
  );
}

export default RegisterMenu;
