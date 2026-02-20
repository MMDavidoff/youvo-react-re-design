import React from 'react';
import classes from './FooterChat.module.css';
import ImageSend from '../imageSend/ImageSend';
import TextEnter from '../textEnter/TextEnter';
import SendButton from '../sendButton/SendButton';

const FooterChat = () => {
  return (
    <div className={classes.footerChat}>
      <TextEnter />
      <ImageSend />
      <SendButton />
    </div>
  );
}

export default FooterChat;
