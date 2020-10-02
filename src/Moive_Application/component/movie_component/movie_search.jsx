import React, { Fragment } from 'react';
import Footer_Component from '../footer/footer';
import * as Global from '../styled_component/global_styled';
import * as Styled from '../styled_component/movie_styled/movie_styled';
import Movie_Recomended from './movie_recomended';
import Movie_Populer from './movie_populer';

function Movie_Search() {
    return(
        <Fragment>
            <Global.GridTemplate row={['50','50']}  rowResS={['100']} rowResT={['50','50']} marginTop="4" marginTopResS='13'>

                <Global.Row padding='30'>
                    <Global.ParagrafTitle color='white' fSize='2.3' >Film</Global.ParagrafTitle>
                    <Global.ParagrafSmall fSize='1.4' fSizeResS='1.3'>Film menyentuh hati kita dengan cara yang berbeda, apa pun genrenya: seram, dramatis, romantis, atau yang lainnya. Begitu banyak judul, begitu banyak pengalaman.</Global.ParagrafSmall>
                </Global.Row>

                <Global.Row padding='30' display='grid' row={['auto','auto']} rowResS={['100']} alignItem='center' justify='center' gap='10'>
                    <Global.Input type="text" placeholder='Cari Film' fSize='1.2' padding='10'/>
                    <Global.Button type="submit" placeholder='Cari Film' fSize='1.2' padding='10'>Cari</Global.Button>
                </Global.Row>

            </Global.GridTemplate>

            <Styled.ContainerMovie display='grid' row={['23', '23', '23', '23']} rowResS={['100']} rowResT={['50','50']} gap='10' justify='center' padding='20'>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/pxqFjaGiKqh6vNwwPJzf82V1T9D.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/2DQhccMuqp3PtZLu2LQQjSXSNQV.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/tII6q7NjDLvTbgN6JAJ9xe5LppU.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>

                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/xTWgncjZOrMmSjaEwA3DLOxaqf0.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/xzugbTN7PRxspT6eUsNLkiZMryz.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/zbAlwsJNxfo4VfTy9peDo7itJ0I.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
            </Styled.ContainerMovie>

            {/* Movie Recomended */}
            <Movie_Recomended/>

            {/* Movie Populer */}
            <Movie_Populer/>

            <Footer_Component/>
        </Fragment>
    )
}

export default Movie_Search;