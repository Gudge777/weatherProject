import React from "react";
import classes from './DateBlock.module.css';

export const DateBlock = (props) => {
    return (
        <div className={classes.dateBlock}>
            <p>{props.date}</p>
        </div>
    );
}