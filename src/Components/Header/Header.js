import React from 'react';
import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const town = useSelector(state => state.town);
    const dispatch = useDispatch();

    const setTown = (town) => {
        dispatch ({type: 'SET_TOWN', town: town});
    }

    return (
        <div className={classes.header}>
            <input className={classes.town} value={town} onChange={e => setTown(e.target.value)}/>
            <h3 className={classes.headerText}>Прогноз погоды</h3>
        </div>);
}

export default Header;