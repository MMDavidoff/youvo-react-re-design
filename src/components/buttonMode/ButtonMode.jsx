import React from 'react';
import classes from './ButtonMode.module.css';

const ButtonMode = ({ modeIcon, modeAlt, onClick, isActive }) => {
    return (
        <button
            className={`${classes.buttonMode} ${isActive ? classes.active : ""}`}
            onClick={onClick}
        >
            <img src={modeIcon} alt={modeAlt} width="28" height="28" />
        </button>
    );
}

export default ButtonMode;
