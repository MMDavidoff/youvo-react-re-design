import React from 'react';
import classes from './ButtonMode.module.css';

const ButtonMode = ({ modeIcon, modeAlt }) => {
    return (
        <button className={classes.buttonMode}>
            <img src={modeIcon} alt={modeAlt} width="24" height="24" />
        </button>
    );
}

export default ButtonMode;
