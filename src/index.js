import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Application from './Application/Application';
import ApplicationMovie from './Moive_Application/application';

function Apps() {
    return(
        <ApplicationMovie/>
    )
}

ReactDOM.render(<Apps/>, document.getElementById('root'));