const setTime = (currentPartOfDate, target, isAdd) => {
    const {value, position, type} = currentPartOfDate;
    let newTime;

    if (isAdd) {
        if (type === 'hours') {
            if (value < 23) {
                newTime = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
            }
            if (Number(value) === 23) {
                newTime = '00';
            }
        } else {
            if (value < 59) {
                newTime = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
            }
            if (value === '59') {
                newTime = '00';
            }
        }
    } else {
        if(type === 'hours') {
            if(value <= 24) {
                newTime = value <= 10 ? `0${Number(value) - 1}` : Number(value) - 1;
            }
            if(value === '00') {
                newTime = '23';
            }
        } else {
            if (value <= 60) {
                newTime = value <= 10 ? `0${Number(value) - 1}` : Number(value) - 1;
            }
            if (value === '00') {
                newTime = '59';
            }
        }
    }
    const [start, end] = position;
    return target.setRangeText(newTime, start, end, 'select');
}
export default setTime;