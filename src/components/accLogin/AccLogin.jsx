import React from 'react';
import classes from './AccLogin.module.css';
import LoginBtn from '../loginBtn/LoginBtn';

const AccLogin = ({ isRegister }) => {
  return (
    <div className={classes.accLogin}>
      <p>{isRegister ? "Already have an account?" : "Don't have an account?"}</p>
     <LoginBtn isRegister={isRegister} />
    </div>
  );
}

export default AccLogin;
