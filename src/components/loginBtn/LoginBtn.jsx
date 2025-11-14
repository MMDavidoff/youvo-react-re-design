import React from 'react';
import classes from './LoginBtn.module.css';



const LoginBtn = ({authBtnTitle = "Sign In" , regBtnTitle = "Sign Up"}) => {
  return (
    <button className={classes.loginBtn}>
      {authBtnTitle}
    </button>
  );
}

export default LoginBtn;
