import React, {useState} from 'react';
import '../styles/InputDate.css'
import moment from "moment";
import useCurrentPosition from "../hooks/useCurrentPosition";
import usePositions from "../hooks/usePositions";
import setDateByCycle from "../helpers/setDateByCycle";

const InputDate = () => {
    const [value, setValue] = useState('');
    const [caretPosition, setCaretPosition] = useState(0);
    const partsOfDate = usePositions(value);
    const currentPartOfDate = useCurrentPosition(partsOfDate, caretPosition, value);

    const dataRegex = /(?<day>\d{1,2})\/(?<month>\D{3,})\/(?<year>\d{4}) (?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})/

    return (
        <div className='container'>
            <label class="text-field__label" htmlFor="date">Enter a date and time:</label>
            <input class="text-field__input" id="date" type='text' placeholder="Press 'Enter' to convert date"
                   value={value}
                   onChange={e => {
                       setValue(e.target.value)
                   }}
                   onKeyDown={e => {
                       if (moment(e.target.value).isValid && e.key === 'Enter') {
                           setValue(moment(e.target.value).format('DD/MMMM/YYYY HH:mm:ss'))
                       }
                       ////get cursor index
                       setTimeout(() => {
                           if (e.target.selectionStart === e.target.selectionEnd) {
                               setCaretPosition(e.target.selectionStart);
                           }
                       })
                       if (('type' in currentPartOfDate && e.key === 'ArrowUp' && dataRegex.test(value)) || ('position' in currentPartOfDate && e.key === 'ArrowDown' && dataRegex.test(value))) {
                           e.preventDefault();
                           setDateByCycle(currentPartOfDate, e.target, e.key);
                           setValue(e.target.value);
                       }
                       if (('type' in currentPartOfDate && e.key === 'ArrowUp' && e.ctrlKey) || ('position' in currentPartOfDate && e.key === 'ArrowDown' && e.ctrlKey)) {

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