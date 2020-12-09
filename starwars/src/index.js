import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from './components/Header/header'
import List from './components/List/list'

const container = document.getElementById('root')

ReactDOM.render(
    <div>
        <Header />
        <div>
            <List />
        </div>

    </div>
    ,  container
);


reportWebVitals();
