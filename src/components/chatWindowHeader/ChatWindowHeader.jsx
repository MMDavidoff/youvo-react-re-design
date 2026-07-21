import React from 'react';
import classes from "./ChatWindowHeader.module.css"
import ChatItem from '../chatItem/ChatItem';

const ChatWindowHeader = () => {
  return (
    <div className={classes.chatWindowHeader}>
       <ChatItem
          itemTitle="Photography Club"
          itemMessage="Online"
          isSetting={true}
          />
    </div>
  );
}

export default ChatWindowHeader;
