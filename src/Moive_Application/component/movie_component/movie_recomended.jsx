import React, {Fragment} from 'react';
import * as Global from '../styled_component/global_styled';
import * as Styled from '../styled_component/movie_styled/movie_styled';

function Movie_Recomended() {
    return(
        <Fragment>
            <Global.GridTemplate display='grid' row={['10','30','40']} rowResS={['10','70','20']} marginTopResS='10' alignItem='center' padding='20' rowResT={['10','40','30']} marginTopResT='0'>
                <Global.HR width='100' height='0'/>
                <Global.ParagrafTitle color='white' textAlign='center'>Film Rekomendasi</Global.ParagrafTitle>
                <Global.HR width='100' height='0'/>
            </Global.GridTemplate>

            <Styled.ContainerMovie display='grid' row={['23', '23', '23', '23']} rowResS={['100']} rowResT={['50','50']} gap='10' justify='center' padding='20'>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/4L3ajGP3ZsnM8xIrXjwEZOLYBjb.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/Akd3Aqrr2q8PLKOCPOkOnB3AoJk.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                </Styled.ContainerMovie>
        </Fragment>
    )
}

export default Movie_Recomended;