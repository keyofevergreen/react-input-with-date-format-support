const getDatePositions = (date, parsedDate) => {
    let fromIndex = 0;
    let currentType = 'day'
    const positions = parsedDate.map((datePosition) => {
        const index = date.indexOf(datePosition, fromIndex);
        if (datePosition.length === 2) {
            fromIndex = index + 2;

            switch (currentType) {
                case 'day':
                    currentType = 'hours';
                    return {
                        type: 'day',
                        value: datePosition,
                        position: [index, index + 2],
                        month: parsedDate[1],
                        year: parsedDate[2]
                    }
                case 'hours':
                    currentType = 'minutes';
                    return {type: 'hours', value: datePosition, position: [index, index + 2]}
                case 'minutes':
                    currentType = 'seconds';
                    return {type: 'minutes', value: datePosition, position: [index, index + 2]}
                case 'seconds':
                    return {type: 'seconds', value: datePosition, position: [index, index + 2]}
                default:
                    return {};
            }
        }
        if (isNaN(datePosition)) {
            return {type: 'month', value: datePosition, position: [index, index + datePosition.length]}
        }
        fromIndex = index + 4;
        // Year
        return {type: 'year', value: datePosition, position: [index, index + 4]}
    })
    return positions;
}

export default getDatePositions;