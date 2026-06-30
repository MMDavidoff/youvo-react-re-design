import React from 'react';
import classes from "./ChatWindowHeader.module.css"
import ChatItem from '../chatItem/ChatItem';

const ChatWindowHeader = () => {
  return (
    <div className={classes.chatWindowHeader}>
       <ChatItem
          itemTitle="Mark"
          itemMessage="offline"
          isSetting={true}
          />
    </div>
  );
}

export default ChatWindowHeader;
