import React from 'react';
import classes from './MainContext.module.css';
import {DateBlock} from "./DateBlock/DateBlock";

const MainContext = () => {
    return (
        <div className={classes.mainContext}>
            <DateBlock date={'сейчас'}/>
        </div>
    )
}
export default MainContext;