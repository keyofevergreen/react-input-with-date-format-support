import {useEffect, useState} from "react";
import getCurrentPosition from "../helpers/getCurrentPosition";
import getDatePositions from "../helpers/getDatePositions";

const useCurrentPosition = (date, caretPosition, regex) => {
    const [position, setPosition] = useState({});
    useEffect(() => {
        if (regex.test(date)) {
            //The first index is not needed because it is the whole string
            const [, ...parsedDate] = regex.exec(date);
            const datePositions = getDatePositions(date, parsedDate)
            setPosition(getCurrentPosition(datePositions, caretPosition, date));
        }
    }, [date, caretPosition])
    return position;
}

export default useCurrentPosition;