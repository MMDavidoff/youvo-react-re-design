import React, { useState } from "react";
import classes from "./Username.module.css";
import { Link } from "react-router-dom";
import ButtonItem from "../buttonItem/ButtonItem";
const Username = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <div className={classes.topSection}>
        <div className={classes.mainUserCard}>
          <div className={classes.userCardFlex} onClick={toggleModal}>
            <img
              className={classes.userLogo}
              src="/image/userLogo.png"
              alt=""
            />
            <Link className={classes.userCard}>Username</Link>
          </div>
        </div>
      </div>
      <div className={`${classes.exitModal} ${isOpen ? classes.active : ""}`}>
          <ButtonItem
            name={"Settings"}
            logo={"/image/exit-yuvo.png"}
            className={classes.buttonSettings}
          />

        <ButtonItem
          name={"Log out"}
          logo={"/image/exit-yuvo.png"}
          className={classes.buttonExit}
        />
      </div>
    </>
  );
};

export default Username;
