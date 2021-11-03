import getDaysInMonth from "./getDaysInMonth";

const setDay = (currentPartOfDate, target, isAdd) => {
    const {value, position, month, year} = currentPartOfDate;
    const days = getDaysInMonth(month, year);
    let newValue;
    if(value < days) {
        if(isAdd) {
            newValue = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
        }
    }
    if(Number(value) === days && isAdd) {
        newValue = '01';
    }

    const [start, end] = position
    return target.setRangeText(newValue, start, end, 'select');
}

export default setDay;