import moment from "moment";

const setDateNotByCycle = (currentPartOfDate, key, fullDate) => {
    const {type} = currentPartOfDate;
    switch (type) {
        case 'day':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 'd') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 'd');
        case 'month':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 'M') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 'M');
        case 'year':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 'y') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 'y');
        case 'hours':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 'h') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 'h');
        case 'minutes':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 'm') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 'm');
        case 'seconds':
            return key === 'ArrowUp' ? moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').add(1, 's') : moment(fullDate, 'DD/MMMM/YYYY HH:mm:ss').subtract(1, 's');
    }
}

export default setDateNotByCycle;