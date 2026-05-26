import React, { useEffect, useState } from 'react';
import classes from './mainPageDate.module.css';


const MainPageDate = () => {
  const [date, setDate] = useState(new Date());

 useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={classes.mainPageDate}>
      <h2 className={classes.date}>{date.toLocaleDateString(`en-UK`, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })} </h2>
      <p className={classes.currentTime}>{date.toLocaleTimeString(`en-UK`, { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</p>
    </div>
  );
}

export default MainPageDate;
