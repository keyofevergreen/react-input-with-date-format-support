import {useEffect, useState} from "react";

const useCurrentPosition = (entry, caretPosition, value) => {
    const [current, setCurrent] = useState({})
    useEffect(() => {
        if(value.length === 0 || !entry.length) {
            return;
        } else {
            for (const position of entry) {
                const [indexOf, lastIndex] = position.position;
                if (caretPosition >= indexOf && caretPosition <= lastIndex) {
                    setCurrent(position);
                }
            }
        }
    }, [entry, caretPosition])
    return current;
}

export default useCurrentPosition;