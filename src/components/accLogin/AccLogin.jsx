import React from 'react';
import classes from './AccLogin.module.css';
import LoginBtn from '../loginBtn/LoginBtn';

const AccLogin = () => {
  return (
    <div className={classes.accLogin}>
      <p>Dont have an account?</p>
     <LoginBtn/>
    </div>
  );
}

export default AccLogin;
