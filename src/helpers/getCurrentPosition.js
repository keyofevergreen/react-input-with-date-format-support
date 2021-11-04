const getCurrentPosition = (entry, caretPosition, value) => {
    if (!value || !entry || value.length === 0) {
        return {};
    } else {
        for (const position of entry) {
            const [indexOf, lastIndex] = position.position;
            // if caret position in date position
            if (caretPosition >= indexOf && caretPosition <= lastIndex) {
                return position;
            }
        }
    }
}

export default getCurrentPosition;