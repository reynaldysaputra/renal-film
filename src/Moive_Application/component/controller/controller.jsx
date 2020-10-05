import React from 'react';
import { Redirect, useHistory, useLocation } from 'react-router';

import ThemeApplication from '../styled_component/theme';
import {ThemeProvider} from 'styled-components';

import Navigation from '../navigation/navigation';
import Movie_Template from '../movie_component/movie_template';
import Movie_Detail from '../movie_component/movie_detail';
import Error_Component from '../error_component/error';

function Controller({match}) {
    const history = useHistory();
    const location = useLocation();

    const ControllerRouteMovie = () => {
        if(location.pathname === '/movie' && history.location.state !== undefined) {
            return(
                <>
                    <Navigation/>
                    <Movie_Template/>
                </>
            )
        }else if(location.pathname === `/movie/movie-detail/${location.state}`) {
            return (
                <>
                    <Navigation/>
                    <Movie_Detail/>
                </>
            )
        }else if(location.pathname === '/') {
            return <Redirect to='/' />
        }else {
            return <Error_Component/>
        }
    }

    return(
        <ThemeProvider theme={ThemeApplication}>
            {console.log('controller rendering')}
            {/* {console.log(history)}
            {console.log(match)}
            {console.log(location)} */}
            {ControllerRouteMovie()}
        </ThemeProvider>
    )
}

export default Controller;