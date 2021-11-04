import React, {useEffect, useState} from 'react';
import '../styles/InputDate.css'
import moment from "moment";
import useCurrentPosition from "../hooks/useCurrentPosition";
import usePositions from "../hooks/usePositions";
import setDateByCycle from "../helpers/setDateByCycle";
import setDateNotByCycle from "../helpers/setDateNotByCycle";

const InputDate = () => {
    const [value, setValue] = useState('');
    const [caretPosition, setCaretPosition] = useState(0);
    const partsOfDate = usePositions(value);
    const currentPartOfDate = useCurrentPosition(partsOfDate, caretPosition, value);
    const dataRegex = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/

    const ref = React.useRef();
    useEffect(() => {
        if('position' in currentPartOfDate) {
            const [start, end] = currentPartOfDate.position;
            ref.current.selectionStart = start;
            ref.current.selectionEnd = end
        }
    }, [currentPartOfDate])

    return (
        <div className='container'>
            <label className="text-field__label" htmlFor="date">Enter a date and time:</label>
            <input className="text-field__input" id="date" type='text' placeholder="Press 'Enter' to convert date"
                   ref={ref}
                   value={value}
                   onChange={e => {
                       setValue(e.target.value)
                   }}
                   onKeyDown={e => {
                       ////get cursor index
                       setTimeout(() => {
                           if (e.target.selectionStart === e.target.selectionEnd) {
                               setCaretPosition(e.target.selectionStart);
                           }
                       })
                       if (moment(e.target.value).isValid() && e.key === 'Enter') {
                           setValue(moment(e.target.value).format('DD/MMMM/YYYY HH:mm:ss'))
                       }
                       if ((e.key === 'ArrowUp' && !e.ctrlKey && dataRegex.test(value)) || (e.key === 'ArrowDown' && !e.ctrlKey && dataRegex.test(value))) {
                           e.preventDefault();
                           setDateByCycle(currentPartOfDate, e.target, e.key);
                           setValue(e.target.value);
                       }
                       if ((e.key === 'ArrowUp' && e.ctrlKey && dataRegex.test(value)) || (e.key === 'ArrowDown' && e.ctrlKey && dataRegex.test(value))) {
                           e.preventDefault();
                           const caret = e.target.selectionStart
                           const element = e.target
                           window.requestAnimationFrame(() => {
                               element.selectionStart = caret
                               element.selectionEnd = caret;
                           })
                           setValue(setDateNotByCycle(currentPartOfDate, e.key, value).format('DD/MMMM/YYYY HH:mm:ss'));
                       }
                   }}
                   onClick={e => {
                       //get current index of caret
                       setTimeout(() => {
                           if (e.target.selectionStart === e.target.selectionEnd) {
                               setCaretPosition(e.target.selectionStart);
                           }
                       })
                   }}
            />
        </div>
    );
};
export default InputDate;