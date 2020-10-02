import React, { Fragment } from 'react';
import * as Styled from '../styled_component/movie_styled/movie_styled';
import * as Global from '../styled_component/global_styled';
import Movie_Recomended from './movie_recomended';
import Movie_Populer from './movie_populer';
import Footer from '../footer/footer';
import { ThemeProvider } from 'styled-components';
import ThemeApplication from '../styled_component/theme';

function Movie_Detail(){
    return(
        <ThemeProvider theme={ThemeApplication}>
            <Global.GlobalStyle/>
            
            <Styled.ContainerMovieDetail height='95' display='grid' row={['100']} rowResS={['100']} rowResT={['100']}>
                <Global.Row width='100' maxContentResS='max-content' maxContentResT='max-content'>
                    <Styled.ImagePoster src='http://image.tmdb.org/t/p/w1280/1leAmLYYf3Bvf2BELEj2XL5s3aU.jpg'/>
                </Global.Row>
                <Global.Row display='grid' row={['100']} width='80' height='100' position='absolute' positionResS='relative' widthResS='100' bgLinearMovie bgLinearMovieResS before alignItem='center' paddingLeft='5' paddingRight='35' paddingRightResT='30' paddingLeftResT='5' paddingRightResS='10' marginTopResS='3' alignItemResS='start'>
                    
                    <div>
                        <Global.ParagrafTitle color='white' marginTopResS='10'>Avengers End Game</Global.ParagrafTitle>
                        
                        <Global.ParagrafSmall color='white' opacity='0.6' fSizeResD='1' marginTopResS='10' fSizeResS='0.9'>2020-10-14 &nbsp;&nbsp;|&nbsp;&nbsp;  Advanture,Action,Science Fiction</Global.ParagrafSmall>

                        <Global.ParagrafSmall marginTop='20' fSizeResD='1' marginTopResS='10'>
                            After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.
                        </Global.ParagrafSmall>
                    </div>
                </Global.Row>
            </Styled.ContainerMovieDetail>

            <Styled.ContainerMovieDetail height='70' display='grid' row={['40']} rowResT={['70']} rowResS={['90']} justify='start' alignContent='center' padding='20'>
                <Global.Row width='100' height='100' widthResT='100'>
                    <Global.ParagrafTitle color='#A3A3A3' fSize='1.5' fSizeResT='1.3' fSizeResS='1.1'>Trailer Avengers End Game</Global.ParagrafTitle>
                    <Styled.FrameVideo src="https://www.youtube.com/embed/5GkD7hrsY_g" allowFullScreen marginTopResS='5' />
                </Global.Row>
            </Styled.ContainerMovieDetail>

            <Movie_Recomended/>

            <Movie_Populer/>

            <Footer/>
        </ThemeProvider>
    )
}

export default Movie_Detail;