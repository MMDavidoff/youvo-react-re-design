import React from "react";
import classes from "./JoinedClubs.module.css";
import { Link } from "react-router-dom";

const JoinedClubs = () => {
  return (
    <div className={classes.joinedClubs}>
      <Link className={classes.joinedClubsList}>Joined Clubs</Link>
    </div>
  );
};

export default JoinedClubs;
