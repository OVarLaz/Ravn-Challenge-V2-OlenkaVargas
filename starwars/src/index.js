import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';


import { client } from './api/resource'
import { ApolloProvider } from "@apollo/client";

import Header from './components/Header/header'
import List from './components/List/list'

const container = document.getElementById('root')


function Main() {
    return (
        <ApolloProvider client={client}>
            <Header />
            <List />
        </ApolloProvider>
    );
}

ReactDOM.render(
    <Main />
    ,  container
);


reportWebVitals();
