import {useEffect, useState} from "react";
import getCurrentPosition from "../helpers/getCurrentPosition";
import getDatePositions from "../helpers/getDatePositions";

const useCurrentPosition = (date, caretPosition) => {
    const dataRegex = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/
    const [position, setPosition] = useState({});
    useEffect(() => {
        if (dataRegex.test(date)) {
            //The first index is not needed because it is the whole string
            const [, ...parsedDate] = dataRegex.exec(date);
            const datePositions = getDatePositions(date, parsedDate)
            setPosition(getCurrentPosition(datePositions, caretPosition, date));
        }
    }, [date, caretPosition])
    return position;
}

export default useCurrentPosition;