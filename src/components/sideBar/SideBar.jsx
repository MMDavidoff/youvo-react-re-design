import React from "react";
import classes from "./sideBar.module.css";
import SpaceChatLine from "../spaceChatLine/SpaceChatLine";
import PersonChat from "../personChat/PersonChat";



const SideBar = () => {
  return (
    <div className={classes.sideBar}>
      <div className={classes.messagesContainer}>
        <p className={classes.messages}>messages</p>
      </div>
      <div className={classes.spaceChatLines}>
        <SpaceChatLine />
        <SpaceChatLine />
        <PersonChat opponentName="Vladislav" messageTime="5:48" />
        <PersonChat opponentName="Nikita" messageTime="17:45" />
        <PersonChat opponentName="Bob" messageTime="16:30" />
        <PersonChat opponentName="Mark" messageTime="15:20" />
        <PersonChat opponentName="Andrey" messageTime="9:30" />
        <PersonChat opponentName="Dima" messageTime="13:30" />

      </div>
    </div>
  );
};

export default SideBar;
