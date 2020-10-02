import React, {Fragment} from 'react';
import * as Global from '../styled_component/global_styled';
import * as Styled from '../styled_component/movie_styled/movie_styled';

function Movie_Populer() {
    return(
        <Fragment>
            <Global.GridTemplate display='grid' row={['10','30','40']} rowResS={['10','70','20']} marginTopResS='10' alignItem='center' padding='20' rowResT={['10','40','30']} marginTopResT='0'>
                <Global.HR width='100' height='0'/>
                <Global.ParagrafTitle color='white' textAlign='center'>Film Paling Populer</Global.ParagrafTitle>
                <Global.HR width='100' height='0'/>
            </Global.GridTemplate>

            <Styled.ContainerMovie display='grid' row={['23', '23', '23', '23']} rowResS={['100']} rowResT={['50','50']} gap='10' justify='center' padding='20'>

                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/8hD10lJgtorr725tXlztuY1d0zq.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/hxMlLJAYFcVXkF1O49racaZRtRl.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/tII6q7NjDLvTbgN6JAJ9xe5LppU.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/uuqEDhWCjX1eVAVqqJbUZOnxkJs.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                

                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/h0v9eQJnJjLIZh5RAbVRBDH1O1X.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/zORP8La4m2esja6OlUkfd1jBEM1.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
                <Styled.Card>
                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                        <Styled.ImagePoster src='http://image.tmdb.org/t/p/w500/z3qumIPPjMzvrMVSLyouEBuWIPA.jpg'/>
                    </Styled.CardHeader>
                </Styled.Card>
            </Styled.ContainerMovie>
        </Fragment>
    )
}

export default Movie_Populer;