import React from 'react';
import classes from './UpcomingEventItem.module.css';

const UpcomingEventItem = ({ upcomingTitle, upcomingDescription, upcomingDate, upcomingTime }) => {
  return (
    <div className={classes.upcomingEventItem}>
      <h3 className={classes.title}>{upcomingTitle}</h3>
      <p className={classes.description}>{upcomingDescription}</p>
      <div className={classes.dateWrapper}>
      <p className={classes.date}>{upcomingDate}</p>
      <p className={classes.time}>{upcomingTime}</p>
      </div>
    </div>
  );
}

export default UpcomingEventItem;
