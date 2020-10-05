import React, {useState, useEffect} from 'react';
import { Route, Switch, useHistory } from 'react-router';

import * as Global from '../styled_component/global_styled';
import * as Styled from '../styled_component/movie_styled/movie_styled';
import {ThemeProvider} from 'styled-components';

import Footer_Component from '../footer/footer';
import Movie_Recomended from './movie_recomended';
import Movie_Populer from './movie_populer';
import Movie_Search from './movie_search';
import ThemeApplication from '../styled_component/theme';
import Controller from '../controller/controller';

import { useRef } from 'react';
import GetApi from './logic_movie';

function Movie_Template() {
    const [dataMovieSearch, setDataS] = useState();
    const inputRef = useRef();

    const handleSearchMovie = () => {
        let valueInput = inputRef.current.value;

        GetApi(`https://api.themoviedb.org/3/search/movie?api_key=0318984c50c6c5fab9d705be653ad475&query=${valueInput}&language=id-IDN`)
        .then(res => setDataS(res.results))
        .catch(err => console.log(err))
    }

    return(
        <ThemeProvider theme={ThemeApplication}>
            <Global.GridTemplate row={['50','50']}  rowResS={['100']} rowResT={['50','50']} marginTop="4" marginTopResS='13'>

                <Global.Row padding='30'>
                    <Global.ParagrafTitle color='white' fSize='2.3' >Film</Global.ParagrafTitle>
                    <Global.ParagrafSmall fSize='1.4' fSizeResS='1.3'>Film menyentuh hati kita dengan cara yang berbeda, apa pun genrenya: seram, dramatis, romantis, atau yang lainnya. Begitu banyak judul, begitu banyak pengalaman.</Global.ParagrafSmall>
                </Global.Row>

                <Global.Row padding='30' display='grid' row={['auto','auto']} rowResS={['100']} alignItem='center' justify='center' gap='10'>
                    <Global.Input type="text" placeholder='Cari Film' fSize='1.2' padding='10' ref={inputRef} />
                    <Global.Button type="submit" placeholder='Cari Film' fSize='1.2' padding='10' onClick={handleSearchMovie}>Cari</Global.Button>
                </Global.Row>

            </Global.GridTemplate>

            {/* Movie Search */}
            {dataMovieSearch != undefined && <Movie_Search data={dataMovieSearch}/>}

            {/* Movie Recomended */}
            {/* <Movie_Recomended data={dataMovieRecomendation}/> */}

            {/* Movie Populer */}
            <Movie_Populer/>

            <Footer_Component/>

            <Switch>
                <Route path='/movie/movie-detail/:id-film' component={Controller} />
            </Switch>
        </ThemeProvider>
    )
}

export default Movie_Template;