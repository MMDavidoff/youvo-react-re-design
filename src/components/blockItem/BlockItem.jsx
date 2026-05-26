import React from "react";
import classes from "./BlockItem.module.css";

const BlockItem = ({ itemName, itemSubName, itemDate, itemIcon }) => {
  return (
    <div className={classes.blockItem}>
      <h3>{itemName}</h3>
      <div className={classes.infoWrapper}>
        <div className={classes.usersWrapper}>
          <img src={itemIcon} alt={itemName} width={20} height={20} />
          <p>{itemSubName}</p>
        </div>
        <h4>{itemDate}</h4>
      </div>
    </div>
  );
};

export default BlockItem;
