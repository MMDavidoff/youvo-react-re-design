import React from "react";
import ChatBubble from "../chatBubble/ChatBubble";
import classes from "./chatWindow.module.css";
import ChatBubbleOpponent from "../chatBubbleOpponent/ChatBubbleOpponent";

const ChatWindow = () => {
  return (
    <div className={classes.chatWindow}>
      <ChatBubbleOpponent chatBubbleOpponent = "Hey everyone! Don't forget about tomorrow's workshop" messageTime="2:25 PM" />
      <ChatBubbleOpponent chatBubbleOpponent = "It starts at 3 PM in the art building" messageTime="2:26 PM" />
      <ChatBubble chatBubble="Thanks for the reminder! I'll be there" messageTime="2:28 PM" />
      <ChatBubble chatBubble="Should we bring our own cameras?" messageTime="2:28 PM" />
      <ChatBubbleOpponent chatBubbleOpponent = "Yes, please bring your cameras! We'll be doing outdoor shots" messageTime="2:30 PM" />
    </div>
  );
};

export default ChatWindow;
