import React from 'react';
import classes from './LoginBtn.module.css';
import { useNavigate } from 'react-router-dom';



const LoginBtn = ({ isRegister }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (isRegister) {
      navigate('/login');
    } else {
      navigate('/register');
    }
  }
  
  return (
    <button onClick={handleClick} className={classes.loginBtn}>
     {isRegister ? "Log In" : "Sign Up"}
    </button>
  );
}

export default LoginBtn;
