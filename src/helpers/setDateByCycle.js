import setDay from "./setDay";
import setMonth from "./setMonth";
import setYear from "./setYear";
import setTime from "./setTime";

const setDateByCycle = (currentPartOfDate, target, key) => {
    switch (currentPartOfDate.type) {
        case 'day':
            return(key === 'ArrowUp' ? setDay(currentPartOfDate, target, true) : setDay(currentPartOfDate, target, false));
        case 'month':
            return(key === 'ArrowUp' ? setMonth(currentPartOfDate, target, true) : setMonth(currentPartOfDate, target, false));
        case 'year':
            return(key === 'ArrowUp' ? setYear(currentPartOfDate, target, true) : setYear(currentPartOfDate, target, false));
        case 'hours':
            return(key === 'ArrowUp' ? setTime(currentPartOfDate, target, true) : setTime(currentPartOfDate, target, false));
        case 'minutes':
            return(key === 'ArrowUp' ? setTime(currentPartOfDate, target, true) : setTime(currentPartOfDate, target, false));
        case 'seconds':
            return(key === 'ArrowUp' ? setTime(currentPartOfDate, target, true) : setTime(currentPartOfDate, target, false));
    }
}

export default setDateByCycle;