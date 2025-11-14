import React, { useState } from 'react';
import classes from './RegTopBar.module.css';
import LogoYouvo from '../logoYouvo/logoYouvo';
import AccLogin from '../accLogin/AccLogin';

const RegTopBar = () => {
 
  return (
    <div className={classes.regTopBar}>
      <LogoYouvo /> 
      <AccLogin isRegister={true}  regBtnTitle={CSSViewTransitionRule}/>
    </div>
    
  );
}

export default RegTopBar;
