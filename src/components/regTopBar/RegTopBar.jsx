import React from "react";
import classes from "./RegTopBar.module.css";
import LogoYouvo from "../logoYouvo/logoYouvo";
import AccLogin from "../accLogin/AccLogin";
import ButtonAction from "../buttonAction/ButtonAction";
import TopBarAction from "../topBarAction/TopBarAction";

const RegTopBar = ({ isAuth , isRegister }) => {
  return (
    <div className={classes.regTopBar}>
      <LogoYouvo />
      {isAuth || isRegister ? <AccLogin isRegister={isRegister} /> : <TopBarAction />} 
    </div>
  );
};

export default RegTopBar;
