import {useEffect, useState} from "react";

const usePositions = (date) => {
    const dataRegex = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/
    const [positions, setPositions] = useState({});
    useEffect(() => {
        if (dataRegex.test(date)) {
            //The first index is not needed because it is the whole string
            const [, ...parsedDate] = dataRegex.exec(date);
            let fromIndex = 0;
            let currentType = 'day'
            //Finding the first index and last index of the components of the date
            const entryOfDateParts = parsedDate.map((datePart) => {
                const index = date.indexOf(datePart, fromIndex);
                if (datePart.length === 2) {
                    fromIndex = index + 2;

                    switch (currentType) {
                        case 'day':
                            currentType = 'hours';
                            return {type: 'day', value: datePart, position: [index, index + 2], month: parsedDate[1], year: parsedDate[2]}
                        case 'hours':
                            currentType = 'minutes';
                            return {type: 'hours', value: datePart, position: [index, index + 2]}
                        case 'minutes':
                            currentType = 'seconds';
                            return {type: 'minutes', value: datePart, position: [index, index + 2]}
                        case 'seconds':
                            return {type: 'seconds', value: datePart, position: [index, index + 2]}
                        default:
                            return {};
                    }
                }
                if (isNaN(datePart)) {
                    return {type: 'month', value: datePart, position: [index, index + datePart.length]}
                }
                fromIndex = index + 4;
                // Year
                return {type: 'year', value: datePart, position: [index, index + 4]}
            })
            setPositions(entryOfDateParts);
        }
    }, [date])
    return positions;
}

export default usePositions;