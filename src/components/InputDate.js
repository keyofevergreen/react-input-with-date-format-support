import React, {useEffect, useState} from 'react';
import '../styles/InputDate.css'
import moment from "moment";
import useCurrentPosition from "../hooks/useCurrentPosition";
import setDateByCycle from "../helpers/setDateByCycle";
import setDateNotByCycle from "../helpers/setDateNotByCycle";

const InputDate = () => {
    const [value, setValue] = useState('');
    const [caretPosition, setCaretPosition] = useState(0);
    const dateRegex = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/
    //Get a data object about the current date position if the caret is in it
    const currentPosition = useCurrentPosition(value, caretPosition, dateRegex);

    const ref = React.useRef();
    const input = ref.current;
    //Allocate the current area after updating the state
    useEffect(() => {
        if ('position' in currentPosition) {
            const [start, end] = currentPosition.position;
            input.selectionStart = start;
            input.selectionEnd = end
        }
    }, [currentPosition])

    const getCaretPosition = (target) => {
        return setTimeout(() => {
            if (target.selectionStart === target.selectionEnd) {
                setCaretPosition(ref.current.selectionStart);
            }
        })
    }

    const setConvertDate = () => {
        setValue(moment(input.value).format('DD/MMMM/YYYY HH:mm:ss'))
    }

    return (
        <div className='container'>
            <label className='text-field__label' htmlFor="date">Enter a date and time:</label>
            <input className="text-field__input" id="date" type='text' placeholder="Press 'Enter' to convert date"
                   ref={ref}
                   value={value}
                   onChange={e => {
                       setValue(e.target.value)
                   }}
                   onKeyDown={e => {
                       getCaretPosition(e.target);

                       if ((moment(e.target.value).isValid() && e.key === 'Enter') || (moment(e.target.value).isValid() && e.key === 'Tab')) {
                           e.preventDefault();
                           setConvertDate();
                       }

                       if ((e.key === 'ArrowUp' && !e.ctrlKey && dateRegex.test(value)) || (e.key === 'ArrowDown' && !e.ctrlKey && dateRegex.test(value))) {
                           e.preventDefault();
                           setDateByCycle(currentPosition, e.target, e.key);
                           setValue(e.target.value);
                       }
                       if ((e.key === 'ArrowUp' && e.ctrlKey && dateRegex.test(value)) || (e.key === 'ArrowDown' && e.ctrlKey && dateRegex.test(value))) {
                           e.preventDefault();
                           const caret = e.target.selectionStart;
                           const element = e.target;
                           // Keep caret position after state update
                           window.requestAnimationFrame(() => {
                               element.selectionStart = caret;
                               element.selectionEnd = caret;
                           })
                           setValue(setDateNotByCycle(currentPosition, e.key, value).format('DD/MMMM/YYYY HH:mm:ss'));
                       }
                   }}
                   onClick={e => {
                       getCaretPosition(e.target);
                   }}
            />
        </div>
    );
};
export default InputDate;