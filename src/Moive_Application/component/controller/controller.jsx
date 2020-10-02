import React from 'react';
import ThemeApplication from '../styled_component/theme';
import styled, {ThemeProvider} from 'styled-components';
import { Redirect, useHistory, useLocation } from 'react-router';
import Navigation from '../navigation/navigation';
import Movie_Search from '../movie_component/movie_search';
import Movie_Detail from '../movie_component/movie_detail';
import Error_Component from '../error_component/error';

function Controller() {
    const history = useHistory();
    const location = useLocation();

    const ControllerRouteMovie = () => {
        if(location.pathname === '/movie' && history.location.state !== undefined) {
            return(
                <>
                    <Navigation/>
                    <Movie_Search/>
                </>
            )
        }else if(location.pathname === '/movie/movie-detail') {
            return (
                <>
                    <Navigation/>
                    <Movie_Detail/>
                </>
            )
        }else if(location.pathname === '/') {
            return <Redirect to='/' />
        }else {
            return(
                <>
                    <Error_Component/>
                </>
            )
        }
    }

    return(
        <ThemeProvider theme={ThemeApplication}>
            {console.log('controller rendering')}
            {console.log(history)}
            {ControllerRouteMovie()}
        </ThemeProvider>
    )
}

export default Controller;