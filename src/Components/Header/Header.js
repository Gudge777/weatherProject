import React, {useEffect} from 'react';
import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {handleChangeTown, setGeolocation} from "../../utilites/utilites";

const Header = () => {
    const town = useSelector(state => state.editedTown);
    const dispatch = useDispatch();
    useEffect(()=> setGeolocation(dispatch), []);
    return (
        <div className={classes.header}>
            <input className={classes.town} value={town} onChange={e => handleChangeTown(e.target.value, dispatch)}/>
            <h3 className={classes.headerText}>Прогноз погоды</h3>
        </div>);
}

export default Header;