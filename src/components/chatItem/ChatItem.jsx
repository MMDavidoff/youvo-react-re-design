import React from "react";
import classes from "./ChatItem.module.css";

const ChatItem = ({ unreadCount, messageTime, itemTitle, itemMessage, isSetting, isActive }) => {
  return (
    <div className={`${classes.chatItem} ${isActive ? classes.active : ""}`}>
      <div className={classes.userPicture}>
        <img src="image/user.svg" alt="userPicture" height="24" width="24" />
      </div>
      <div className={classes.itemInfo}>
        <div className={classes.itemMessageContainer}>
          <p className={classes.itemTitle}>{itemTitle}</p>
          <p className={classes.itemTime}>{messageTime}</p>
        </div>
        <div className={classes.itemChatCounter}>
          <p className={classes.itemMessage}>{itemMessage}</p>
          {!isSetting && unreadCount && <div className={classes.unreadCount}>{unreadCount}</div>}
        </div>
       
      </div>
       {isSetting && (
          <div className={classes.settingIcon}>
            <img src="image/settings.svg" alt="setting" height="25" width="25" />
          </div>
        )}
    </div>
  );
};

export default ChatItem;
