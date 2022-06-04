import React from "react";
import {useSelector} from "react-redux";

export const CurrentStatus = () => {
    const town = useSelector(state => state.town);
    const chosenDate = useSelector(state => state.chosenDate);
    return (<div>
        <p>Погода в городе {town} {chosenDate}</p>
    </div>);
}