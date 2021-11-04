import setDay from "./setDay";
import setMonth from "./setMonth";
import setYear from "./setYear";
import setTime from "./setTime";

const setDateByCycle = (currentPartOfDate, target, key) => {
    const {type} = currentPartOfDate;
    const isAdd = key === 'ArrowUp';

    if(type === 'days') {
        return setDay(currentPartOfDate, target, isAdd);
    }
    if(type === 'months') {
        return setMonth(currentPartOfDate, target, isAdd);
    }
    if(type === 'years') {
        return setYear(currentPartOfDate, target, isAdd)
    } else {
        return setTime(currentPartOfDate, target, isAdd)
    }
}

export default setDateByCycle;