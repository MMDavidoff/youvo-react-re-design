import React from 'react';
import classes from './ChatContainer.module.css'; 
import ChatItem from '../chatItem/ChatItem';

const ChatContainer = () => {
    return (
        <div className={classes.chatContainer}>
            <ChatItem />
            <ChatItem />
            <ChatItem />
        </div>
    );
}

export default ChatContainer;
