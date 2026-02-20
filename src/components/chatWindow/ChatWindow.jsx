import React from "react";
import ChatBubble from "../chatBubble/ChatBubble";
import classes from "./chatWindow.module.css";
import ChatBubbleOpponent from "../chatBubbleOpponent/ChatBubbleOpponent";

const ChatWindow = () => {
  return (
    <div className={classes.chatWindow}>
      <ChatBubbleOpponent chatBubbleOpponent = "Hello, how are you?" />
      <ChatBubble chatBubble="I'm fine, thanks!" />
      <ChatBubbleOpponent chatBubbleOpponent = "That's great to hear!" />
      <ChatBubble chatBubble="What are you up to today?" />
      <ChatBubbleOpponent chatBubbleOpponent = "Just working on some projects." />
      <ChatBubble chatBubble="Sounds interesting!" />
      <ChatBubbleOpponent chatBubbleOpponent = "I'm working on a React project." />
      <ChatBubble chatBubble="That's cool!" />
    </div>
  );
};

export default ChatWindow;
