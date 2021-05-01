import React from 'react';
import './action-bar.scss';

const ActionBar = ({ onBeautifyBtnClick }) => {
    return (
        <div className="action-bar">
            <button className="beautify-btn" onClick={onBeautifyBtnClick}>BEAUTIFY</button>
        </div>
    )
}

export default ActionBar;