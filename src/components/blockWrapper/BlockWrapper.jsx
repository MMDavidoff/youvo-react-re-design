import React from 'react';
import classes from './BlockWrapper.module.css';

const BlockWrapper = ({ title , children }) => {
  return (
    <div className={classes.blockWrapper}>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

export default BlockWrapper;
