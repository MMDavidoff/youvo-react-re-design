import React from 'react';
import classes from './ImageSend.module.css';

const ImageSend = () => {
  return (
    <button className={classes.imageSend}><img src="/image/paperclip.svg" alt="Attach" width={28} height={28} /></button>
  );
}

export default ImageSend;
