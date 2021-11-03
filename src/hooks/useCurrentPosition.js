import {useEffect, useState} from "react";

const useCurrentPosition = (entry, caretPosition) => {
    const [current, setCurrent] = useState({})
    useEffect(() => {
        if(!entry.length) return;
        for (const position of entry) {
            const [indexOf, lastIndex] = position.position;
            if (caretPosition >= indexOf && caretPosition <= lastIndex) {
                setCurrent(position);
            }
        }
    }, [entry, caretPosition])
    return current;
}

export default useCurrentPosition;