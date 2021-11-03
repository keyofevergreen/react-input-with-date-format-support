import moment from "moment";

const setMonth = (currentPartOfDate, target, isAdd) => {
    const {value, position} = currentPartOfDate;
    let newMonth;

    if(isAdd) {
        newMonth = moment(value, 'MMMM').add(1, 'M').format('MMMM').toString();
    } else {
        newMonth = moment(value, 'MMMM').subtract(1, 'M').format('MMMM').toString();
    }

    const [start, end] = position
    return target.setRangeText(newMonth, start, end, 'select');
}

export default setMonth;
