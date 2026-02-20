import React from 'react';
import classes from './ImageSend.module.css';

const ImageSend = () => {
  return (
    <button className={classes.imageSend}><img src="image/photoimage.png" alt="" width={80} height={80} /></button>
  );
}

export default ImageSend;
