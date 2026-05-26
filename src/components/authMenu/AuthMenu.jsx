import React, { useState } from "react";
import ButtonMain from "../buttonMain/ButtonMain";
import classes from "./AuthMenu.module.css";
import LogoYouvo from "../logoYouvo/logoYouvo";

const AuthMenu = ({isLogin: isLoginProp}) => {
  const [isLogin, setIsLogin] = useState(isLoginProp);
  return (
    <div className={classes.signMenu}>
      <form className={classes.form}>
        <h2 className={classes.header}>{isLogin ? "Log In" : "Sign Up"}</h2>
        <input type="text" placeholder={"Enter Username"} />
        {!isLogin && <input type="email" placeholder={"Enter Email"} />}
        <input type="password" placeholder={"Enter Password"} />

        <button className={classes.signUpButton}>
          {isLogin ? "Log In" : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default AuthMenu;
  