import React, { useState } from 'react';
import BeautifyInput from '../../components/beautify-input/beautify-input';
import ActionBar from '../../components/action-bar/action-bar';
import { beautifyJson } from './utils';
const Home = () => {
    
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        if(event.target.value) {
            setInputValue(event.target.value);
        } else {
            setInputValue('');
        }
    }

    const onBeautifyBtnClick = () => {
        setInputValue(beautifyJson(inputValue))
    }

    return <>
        <ActionBar onBeautifyBtnClick={onBeautifyBtnClick} />
        <BeautifyInput onInputChange={onInputChange} value={inputValue} />
    </>
}
   
export default Home;