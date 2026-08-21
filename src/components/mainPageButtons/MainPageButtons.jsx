import React from "react";
import classes from "./MainPageButtons.module.css";

const MainPageButtons = ({ icon, buttonText, className }) => {
  const extraClass = className ? classes[className] || "" : "";

  return (
    <button className={`${classes.mainPageButton} ${extraClass}`}>
      <img src={icon} alt={buttonText} width={20} height={20} data-on-fill />
      {buttonText}
    </button>
  );
};

export default MainPageButtons;
