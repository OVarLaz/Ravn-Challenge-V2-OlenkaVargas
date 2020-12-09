import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/header'

const container = document.getElementById('root')

ReactDOM.render(
    <div>
        <Header />
    </div>
    ,
  container
);


reportWebVitals();
