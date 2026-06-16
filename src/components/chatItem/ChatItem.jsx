import React from "react";
import classes from "./ChatItem.module.css";

const ChatItem = () => {
  return (
    <div className={classes.chatItem}>
      <div className={classes.userPicture}>
        <img src="image/user.svg" alt="userPicture" height="24" width="24" />
      </div>
      <div className={classes.itemInfo}>
        <p className={classes.itemTitle}>Football club</p>
        <p className={classes.itemMessage}>Lorem ipsum dolor sit amet...</p>
      </div>
    </div>
  );
};

export default ChatItem;
