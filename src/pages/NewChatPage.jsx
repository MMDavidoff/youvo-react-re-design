"use client";
import React from "react";
import RegTopBar from "../components/regTopBar/RegTopBar";
import ActionLeftBar from "../components/actionLeftBar/ActionLeftBar";
import ChatContainer from "../components/chatContainer/ChatContainer";
import classes from "./NewChatPage.module.css";
import ChatItem from "../components/chatItem/ChatItem";

const NewChatPage = () => {
  return (
    <div className={classes.newChatPage}>
      <RegTopBar />
      <div className={classes.flexContainer}>
        <ActionLeftBar />
        <ChatContainer />
      </div>
    </div>
  );
};

export default NewChatPage;
