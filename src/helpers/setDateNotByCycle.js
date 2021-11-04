import moment from "moment";

const setDateNotByCycle = (currentPartOfDate, key, fullDate) => {
    const {type} = currentPartOfDate;
    const currentDate = moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss');
    return key === 'ArrowUp' ? currentDate.add(1, type) : currentDate.subtract(1, type);
}

export default setDateNotByCycle;