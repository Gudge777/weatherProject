import React from 'react';
import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const town = useSelector(state => state.town);
    const setTown = (town) => {
        const dispatch = useDispatch();
        dispatch ({type: 'setTown', town: town});
    }

    return (
        <div className={classes.header}>
            <input className={classes.town} value={town} onChange={e => setTown(e.target.value)}/>
            <h3 className={classes.headerText}>Прогноз погоды</h3>
        </div>);
}

export default Header;