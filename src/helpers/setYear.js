const setYear = (currentPartOfDate, target, isAdd) => {
    const {value, position} = currentPartOfDate;
    console.log(value)
    let newYear;

    if (isAdd) {
        newYear = Number(value) + 1;
    } else {
        newYear = Number(value) - 1;
        if (value <= 1900) {
            newYear = 1900;
        }
    }

    const [start, end] = position;
    return target.setRangeText(newYear, start, end, 'select');
}

export default setYear;