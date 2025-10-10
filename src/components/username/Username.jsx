import React from "react";
import classes from "./Username.module.css";
import { Link } from "react-router-dom";
const Username = () => {
  return (
    <div className={classes.topSection}>
      <div className={classes.mainUserCard}>
        <div className={classes.userCardFlex}>
        <img className={classes.userLogo} src="/image/userLogo.png" alt="" />
        <Link className={classes.userCard}>Username</Link>
        </div>
      </div>
    </div>
  );
};

export default Username;
