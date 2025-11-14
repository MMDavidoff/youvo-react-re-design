import React from 'react';
import classes from "./InfoDetails.module.css";

const InfoDetails = () => {
  return (
    <div className={classes.infoDetails}>
      <div className={classes.infoFlex}>
      <label htmlFor=""> Name:</label>
      <input type="text"  placeholder='Myron'/>
      </div>
      <div className={classes.infoFlex}>
      <label htmlFor=""> Email:</label>
      <input type="email"  />
      </div>
      <div className={classes.infoFlex}>
      <label htmlFor=""> Phone Number:</label>
      <input type="number" />
      </div>
      <div className={classes.infoFlex}>
      <label htmlFor=""> Password:</label>
      <input type="password"  />
      </div>
    </div>
  );
}

export default InfoDetails;
