import React from "react";
import classes from "./EventList.module.css";
import EventItem from "../eventItem/EventItem";

const EventList = () => {
  return (
    <div>
      <div className={classes.EventList}>
      <EventItem name={"Event Base Ball"} description={"Moscow Base Ball Pro"} img={"/image/ClubPhoto.png"} date={"19/9/25 8:30 MSK"}/>
      <EventItem name={"Event Base Ball"} description={"Moscow Base Ball Pro"} img={"/image/ClubPhoto.png"} date={"19/9/25 8:30 MSK"}/>
      <EventItem name={"Event Base Ball"} description={"Moscow Base Ball Pro"} img={"/image/ClubPhoto.png"} date={"19/9/25 8:30 MSK"}/>
      <EventItem name={"Event Base Ball"} description={"Moscow Base Ball Pro"} img={"/image/ClubPhoto.png"} date={"19/9/25 8:30 MSK"}/>
      
      </div>
    </div>
  );
};

export default EventList;
