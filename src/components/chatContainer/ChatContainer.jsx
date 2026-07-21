import React from "react";
import classes from "./ChatContainer.module.css";
import ChatItem from "../chatItem/ChatItem";
import ChatSearchBar from "../chatSearchBar/ChatSearchBar";

const ChatContainer = () => {
  return (
    <div className={classes.chatContainer}>
      <ChatSearchBar />
      <ChatItem
        unreadCount="3"
        messageTime="2:30 PM"
        itemTitle="Photography Club"
        itemMessage="Don't forget the workshop tomorrow"
        isActive={true}
      />
      <ChatItem
        messageTime="1:45 PM"
        itemTitle="Sarah Johnson"
        itemMessage="See you at the event!"
      />
      <ChatItem
        unreadCount="1"
        messageTime="12:20 PM"
        itemTitle="Coding Society"
        itemMessage="Registration link is in the description"
      />
      <ChatItem
        messageTime="Yesterday"
        itemTitle="Mike Chen"
        itemMessage="Thanks for the help!"
      />
      <ChatItem
        unreadCount="5"
        messageTime="Yesterday"
        itemTitle="Chess Club"
        itemMessage="Tournament brackets are up"
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
