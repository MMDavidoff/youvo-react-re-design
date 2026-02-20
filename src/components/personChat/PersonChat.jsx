import React from "react";
import classes from "./PersonChat.module.css";
import { Link } from "react-router-dom";

const PersonChat = ({opponentName , messageTime}) => {
  return (
    <div className={classes.personChat}>
      <img src="/image/Ellipse22.png" width="43" height="43" />
      <div className={classes.personChatInfo}>
      <h2 className={classes.opponentName}>{opponentName}</h2>
      <div className={classes.timeAndImg}>
        <p className={classes.dateChat}>{messageTime}</p>
        <img src="/image/group11.png" width="25" height="25" />
        </div>
      </div>
    </div>
  );
};

export default PersonChat;
