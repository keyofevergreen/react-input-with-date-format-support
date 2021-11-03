import React, {useState} from 'react';
import '../styles/InputDate.css'
import moment from "moment";
import useCurrentPosition from "../hooks/useCurrentPosition";
import setDay from "../helpers/setDay";
import usePositions from "../hooks/usePositions";
import setMonth from "../helpers/setMonth";
import setYear from "../helpers/setYear";
import setTime from "../helpers/setTime";
import setDate from "../helpers/setDate";

const InputDate = () => {
    const [value, setValue] = useState('');
    const [caretPosition, setCaretPosition] = useState(0);
    const partsOfDate = usePositions(value);
    const currentPartOfDate = useCurrentPosition(partsOfDate, caretPosition);

    return (
        <div className='container'>
            <label htmlFor="date">Enter a date and time:</label>
            <input id="date" type='text' value={value}
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
                       if (('position' in currentPartOfDate && e.key === 'ArrowUp') || ('position' in currentPartOfDate && e.key === 'ArrowDown')) {
                           e.preventDefault();
                           setDate(currentPartOfDate, e.target, e.key);
                           setValue(e.target.value);
                       }
                   }}
                   onClick={e => {
                       //get cursor index
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