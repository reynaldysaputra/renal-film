import React, {Fragment, useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import * as Global from '../styled_component/global_styled';
import * as Styled from '../styled_component/movie_styled/movie_styled';

import GetApi from './logic_movie';

function Movie_Recomended({data}) {
    const [dataMovieRecommendation, setDataR] = useState();
    const urlImage = 'http://image.tmdb.org/t/p/w500/';
    const history = useHistory();
    let id = data, id_default = '299534';

    const getDataRecomen = (id_film) => {
        GetApi(`https://api.themoviedb.org/3/movie/${id_film}/recommendations?api_key=0318984c50c6c5fab9d705be653ad475`)
        .then(res => {
            setDataR(res.results);
        })
        .catch(err => console.log(err))
    }

     useEffect(() => {
        getDataRecomen(id);
    }, [])

    const handlePage = (e) => {
        const id_film = e.target.dataset.film;

        history.push({
            pathname : `/movie/movie-detail/${id_film}`,
            state : id_film
        })
    }

    return(
        <Fragment>
            {console.log(id_default)}
            {
                dataMovieRecommendation != undefined 
                    && 
                dataMovieRecommendation.length > 0 ? true  : getDataRecomen(id_default)
            }
            <Global.GridTemplate display='grid' row={['10','30','40']} rowResS={['10','70','20']} marginTopResS='10' alignItem='center' padding='20' rowResT={['10','40','30']} marginTopResT='0'>
                <Global.HR width='100' height='0'/>
                <Global.ParagrafTitle color='white' textAlign='center'>Film Rekomendasi</Global.ParagrafTitle>
                <Global.HR width='100' height='0'/>
            </Global.GridTemplate>

            <Styled.ContainerMovie display='grid' row={['23', '23', '23', '23']} rowResS={['100']} rowResT={['50','50']} gap='10' justify='center' padding='20'>            
                {dataMovieRecommendation !== undefined && 
                    dataMovieRecommendation.map((item) => {
                        if(item.poster_path !== null) {
                            return(
                                <Styled.Card key={item.id}>
                                    <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                                        <Styled.ImagePoster src={urlImage + item.poster_path} onClick={handlePage} data-film={item.id} />
                                    </Styled.CardHeader>
                                </Styled.Card>
                            )
                        }
                    })
                }
            </Styled.ContainerMovie>
        </Fragment>
    )
}

export default Movie_Recomended;