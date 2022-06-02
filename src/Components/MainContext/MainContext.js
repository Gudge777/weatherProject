import React from 'react';
import classes from './MainContext.module.css'

const MainContext = () => {
    const town = 'Санкт-Петербург';
    const chosenDate = 'сейчас';

    return (
        <div className={classes.mainContext}>
            <p className={classes.status}>Погода в городе {town} {chosenDate}</p>

        </div>
    )
}
export default MainContext;