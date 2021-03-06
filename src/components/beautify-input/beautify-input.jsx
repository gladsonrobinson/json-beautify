import React from 'react';
import './beautify-input.scss';

const BeautifyInput = ({onInputChange, value}) => {
    return (
        <textarea autoFocus={true}
            className="beautify-input"
            onChange={onInputChange}
            value={value}
            placeholder="Paste your JSON"
            wrap="off">
        </textarea>
    )
}

export default BeautifyInput;