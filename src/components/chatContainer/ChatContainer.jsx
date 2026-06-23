import React from "react";
import classes from "./ChatContainer.module.css";
import ChatItem from "../chatItem/ChatItem";
import ChatSearchBar from "../chatSearchBar/ChatSearchBar";

const ChatContainer = () => {
  return (
    <div className={classes.chatContainer}>
      <ChatSearchBar />
      <ChatItem
        unreadCount="15"
        messageTime="11:39 AM"
        itemTitle="Football club"
        itemMessage="Hello, how are you?"
      />
      <ChatItem
        unreadCount="9"
        messageTime="Yesterday"
        itemTitle="Team meeting"
        itemMessage="Don't forget about the meeting tomorrow.Don't forget about the meeting tomorrow."
      />
      <ChatItem
        unreadCount="2"
        messageTime="Thursday"
        itemTitle="Project discussion"
        itemMessage="Let's discuss the project timeline."
      />
      <div className={classes.profileSettings}>
        <ChatItem
          itemTitle="myron"
          itemMessage="online"
          isSetting={true}
        />
      </div>
    </div>
  );
};

export default ChatContainer;
