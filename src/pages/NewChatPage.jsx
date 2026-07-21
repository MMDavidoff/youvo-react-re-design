"use client";
import React from "react";
import RegTopBar from "../components/regTopBar/RegTopBar";
import ActionLeftBar from "../components/actionLeftBar/ActionLeftBar";
import ChatContainer from "../components/chatContainer/ChatContainer";
import classes from "./NewChatPage.module.css";
import ChatWindowHeader from "../components/chatWindowHeader/ChatWindowHeader";
import ChatWindow from "../components/chatWindow/ChatWindow";
import FooterChat from "../components/footerChat/FooterChat";

const NewChatPage = () => {
  return (
    <div className={classes.newChatPage}>
      <RegTopBar />
      <div className={classes.flexContainer}>
        <ActionLeftBar />
        <ChatContainer />
        <div className={classes.chatMainArea}>
          <ChatWindowHeader />
          <ChatWindow />
          <FooterChat />
        </div>
      </div>
    </div>
  );
};

export default NewChatPage;
