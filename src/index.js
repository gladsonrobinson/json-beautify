import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.scss';

const title = 'Json Beautify';
 
ReactDOM.render(
  <App title={title} />,
  document.getElementById('app')
);
