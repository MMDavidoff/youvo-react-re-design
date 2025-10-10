import React from 'react';
import classes from "./EventItem.module.css"

const EventItem = ({name , description , img , date}) => {
  return (
    <div className={classes.eventItemList}>
      <img  src={img} alt="" />
      <div className={classes.divideItem}>
            <h3>{name}</h3>
            <p>{description}</p>
            <h4>{date}</h4>
            </div>
    </div>
  );
}

export default EventItem;
