import moment from "moment";
import {useState} from "react";

const setDateNotByCycle = (currentPartOfDate, key, fullDate) => {
    const {type} = currentPartOfDate;
    return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, type) : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, type);
}

export default setDateNotByCycle;