import {useEffect, useState} from "react";

const usePositions = (date) => {
    const dataTime = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/
    const [positions, setPositions] = useState({});
    //Breaking a date into its constituent dates
    useEffect(() => {
        if (dataTime.test(date)) {
            //The first index is not needed because it is the whole string
            const [, ...partsOfDate] = dataTime.exec(date);
            let fromIndex = 0;
            let currentType = 'day'
            //Finding the intervals of the components of the date
            const entryOfDateParts = partsOfDate.map((datePart) => {
                const index = date.indexOf(datePart, fromIndex);
                if (datePart.length === 2) {
                    fromIndex = index + 2;

                    switch (currentType) {
                        case 'day':
                            currentType = 'hours';
                            return {type: 'day', value: datePart, position: [index, index + 2], month: partsOfDate[1], year: partsOfDate[2]}
                        case 'hours':
                            currentType = 'minutes';
                            return {type: 'hours', value: datePart, position: [index, index + 2]}
                        case 'minutes':
                            currentType = 'seconds';
                            return {type: 'minutes', value: datePart, position: [index, index + 2]}
                        case 'seconds':
                            return {type: 'seconds', value: datePart, position: [index, index + 2]}
                        default:
                            return [];
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