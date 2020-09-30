import React from 'react';
import {BrowserRouter as ReactRoute} from 'react-router-dom';
import ProviderLogin from './component/login/providerLogin';
import Movie from './component/movie_component/movie';
import Navigation from './component/navigation/navigation';
import './style/global.css';

function ApplicationMovie() {
    return(
        // <ReactRoute forceRefresh={false}>
            <Navigation/>
        /* </ReactRoute> */
    )
}

export default ApplicationMovie;