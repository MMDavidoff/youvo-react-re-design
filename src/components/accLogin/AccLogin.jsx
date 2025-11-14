import React from 'react';
import classes from './AccLogin.module.css';
import LoginBtn from '../loginBtn/LoginBtn';

const AccLogin = ({isRegister , onClick}) => {
  return (
    <div className={classes.accLogin}>
      <p>{isRegister ? "Have an account?" : "Dont have an account?"}</p>
     <LoginBtn authBtnTitle={ isRegister ? "Sign In" : "Sign Up" } onClick={onClick} />
    </div>
  );
}

export default AccLogin;
