import moment from "moment";

const setDay = (currentPartOfDate, target, isAdd) => {
    const {value, position, month, year} = currentPartOfDate;
    const days = moment(`${month}/${year}`, 'MMMM/YYYY').daysInMonth();
    let newDay;

    if (isAdd) {
        if (value > days) {
            newDay = '01';
        }
        if (value < days) {
            newDay = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
        }
        if (Number(value) === days) {
            newDay = '01';
        }
    } else {
        if (value > days) {
            newDay = days - 1;
        }
        if (value <= days) {
            newDay = value <= 10 ? `0${Number(value) - 1}` : Number(value) - 1;
        }
        if (Number(value) === 1) {
            newDay = days;
        }
    }
    const [start, end] = position;
    return target.setRangeText(newDay, start, end, 'select');
}
export default setDay;