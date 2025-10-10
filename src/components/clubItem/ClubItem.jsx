import React from 'react';
import classes from "./ClubItem.module.css"

const ClubItem = ({club}) => {
  return (
    <div className={classes.clubForm}>
      <img  src={club.img} alt="" />
      <div className={classes.clubFormTitle}>
      <h3>{club.name}</h3>
      <p>{club.description}</p>
      </div>
    </div>
  );
}

export default ClubItem;
