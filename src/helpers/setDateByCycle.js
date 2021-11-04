import setDay from "./setDay";
import setMonth from "./setMonth";
import setYear from "./setYear";
import setTime from "./setTime";

const associativeArray = {
    days: setDay,
    months: setMonth,
    years: setYear,
    hours: setTime,
    minutes: setTime,
    seconds: setTime
}

const setDateByCycle = (currentPartOfDate, target, key) => {
    const {type} = currentPartOfDate;
    const isAdd = key === 'ArrowUp';
    return associativeArray[type](currentPartOfDate, target, isAdd);
}
export default setDateByCycle;