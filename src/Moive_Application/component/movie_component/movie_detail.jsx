import React, { Fragment, useState } from 'react';

import * as Styled from '../styled_component/movie_styled/movie_styled';
import * as Global from '../styled_component/global_styled';

import Movie_Recomended from './movie_recomended';
import Movie_Populer from './movie_populer';
import Footer from '../footer/footer';

import { ThemeProvider } from 'styled-components';
import ThemeApplication from '../styled_component/theme';
import { useLocation } from 'react-router';

import { useEffect } from 'react';
import GetApi from './logic_movie';

function Movie_Detail(){
    const [dataDetail, setDataD] = useState();
    const [dataVideo, setDataV] = useState();
    const location = useLocation();
    const url = 'http://image.tmdb.org/t/p/w1280';
    const urlVideo = 'https://www.youtube.com/embed/';

    // Get api data detail
    useEffect(() => {
        GetApi(`https://api.themoviedb.org/3/movie/${location.state}?api_key=0318984c50c6c5fab9d705be653ad475&language=ID-IDN`)
        .then(res => setDataD(res))
        .catch(err => console.log(err))
    }, [])

    // Get api data video
    useEffect(() => {
        GetApi(`https://api.themoviedb.org/3/movie/${location.state}/videos?api_key=0318984c50c6c5fab9d705be653ad475&language=ID-IDN`)
        .then(res => setDataV(res.results))
        .catch(err => console.log(err))
    }, [])

    return(
        <ThemeProvider theme={ThemeApplication}>
            <Global.GlobalStyle/>
                        
            {dataDetail !== undefined && 
                <Styled.ContainerMovieDetail height='100' display='grid' row={['100']} rowResS={['100']} rowResT={['100']} marginTopResS='15'>
                    <Global.Row width='100' maxContentResS='max-content' maxContentResT='max-content'>
                        {
                            dataDetail.backdrop_path !== null 
                            ?
                            <Styled.ImagePoster src={url + dataDetail.backdrop_path}/> : 
                            <Styled.ImagePoster src='https://i2.wp.com/topikpapua.com/wp-content/plugins/accelerated-mobile-pages/images/SD-default-image.png?resize=1280%2C720&ssl=1'/>
                        }
                    </Global.Row>
                    <Global.Row display='grid' row={['100']} width='80' height='100' position='absolute' positionResS='relative' widthResS='100' bgLinearMovie bgLinearMovieResS before alignItem='center' paddingLeft='5' paddingRight='35' paddingRightResT='30' paddingLeftResT='5' paddingRightResS='10' marginTopResS='3' alignItemResS='start'>
                        
                        <div>
                            <Global.ParagrafTitle color='white' marginTopResS='10'>{dataDetail.original_title}</Global.ParagrafTitle>
                            
                            <Global.ParagrafSmall color='white' opacity='0.6' fSizeResD='1' marginTopResS='10' fSizeResS='0.9'>{dataDetail.release_date} &nbsp;&nbsp;|&nbsp;&nbsp;  {dataDetail.genres.map((item,index) =>  item.name + ' ')}</Global.ParagrafSmall>

                            <Global.ParagrafSmall marginTop='20' fSizeResD='1' marginTopResS='10'>
                                {dataDetail.overview}
                            </Global.ParagrafSmall>
                        </div>
                    </Global.Row>
                </Styled.ContainerMovieDetail>
            }

            {dataVideo !== undefined && 
            <Styled.ContainerMovieDetail padding='10' heightAuto>
                <Global.Row width='100' widthResT='100' heightAuto>
                        {dataVideo.map(item => {
                            return(
                                item.type === 'Trailer' && 
                                <Styled.FrameVideo key={item.id} src={urlVideo + item.key} margin='3' marginTopResS='5' allowFullScreen={true} webkitallowfullscreen={true} mozallowfullscreen={true} float='left' />
                            )
                        })}
                </Global.Row>
            </Styled.ContainerMovieDetail>
            } 

            <Movie_Recomended data={location.state}/>

            <Movie_Populer/>

            <Footer/>
        </ThemeProvider>
    )
}

export default Movie_Detail;