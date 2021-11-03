import moment from "moment";

const setDay = (currentPartOfDate, target, isAdd) => {
    const {value, position, month, year} = currentPartOfDate;
    const days = moment(`${month}/${year}`, 'MMMM/YYYY').daysInMonth();
    let newValue;

    switch(isAdd) {
        case true:
            if(value < days) {
                newValue = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
            }
            if(Number(value) === days) {
                newValue = '01';
            }
            break;
        case false:
            if(value <= days) {
                newValue = value <= 10 ? `0${Number(value) - 1}` : Number(value) - 1;
            }
            if(Number(value) === 1) {
                newValue = days;
            }
            break;
        default:
            newValue = value;
    }

    const [start, end] = position
    return target.setRangeText(newValue, start, end, 'select');
}

export default setDay;