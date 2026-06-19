import React from "react";
import classes from "./ChatSearchBar.module.css";

const ChatSearchBar = () => {
  return (
    <div className={classes.chatSearchBarContainer}>
      <input className={classes.chatSearchBar} placeholder="Search" />
      <img className={classes.searchIcon} src="image/search.svg" alt="Search" width="18" height="18" />
    </div>
  );
};

export default ChatSearchBar;
