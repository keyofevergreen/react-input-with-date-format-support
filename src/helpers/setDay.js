const setDay = (value) => {
    const nextValue = value < 9 ? `0${Number(value) + 1}` : Number(value) + 1;
    return nextValue;
}

export default setDay;