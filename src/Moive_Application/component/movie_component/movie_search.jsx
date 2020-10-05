import React from 'react';
import * as Styled from '../styled_component/movie_styled/movie_styled';
import * as Global from '../styled_component/global_styled';

import { useHistory } from 'react-router';

function Movie_Search({data}) {
    const history = useHistory();
    const urlImage = 'http://image.tmdb.org/t/p/w500/';
    
    const handlePage = (e) => {
        const id_film = e.target.dataset.film;

        history.push({
            pathname : `/movie/movie-detail/${id_film}`,
            state : id_film
        })
    }
    
    return(
        <>
            <Global.GridTemplate display='grid' row={['10','30','40']} rowResS={['10','70','20']} marginTopResS='10' alignItem='center' padding='20' rowResT={['10','40','30']} marginTopResT='0'>
                <Global.HR width='100' height='0'/>
                <Global.ParagrafTitle color='white' textAlign='center'>Hasil pencarian</Global.ParagrafTitle>
                <Global.HR width='100' height='0'/>
            </Global.GridTemplate>

            {console.log(data.length > 0)}

            {
                data.length > 0  ? 
                <Styled.ContainerMovie display='grid' row={['23', '23', '23', '23']} rowResS={['100']} rowResT={['50','50']} gap='10' justify='center' padding='20'>
                    {data !== undefined && 
                        data.map((item) => {
                            if(item.poster_path !== null) {
                                return(
                                    <Styled.Card key={item.id}>
                                        <Styled.CardHeader height='60' heightResS='80' heightResT='55'>
                                            <Styled.ImagePoster src={urlImage + item.poster_path} onClick={handlePage} data-film={item.id} />
                                        </Styled.CardHeader>
                                    </Styled.Card>
                                )
                            }
                        })}
                </Styled.ContainerMovie> 
                :
                <Global.ParagrafTitle color='white' textAlign='center'>Pencarian kamu tidak ditemukan di film kami, coba cari lagi yah</Global.ParagrafTitle>
            }
        </>
    )
}

export default Movie_Search;
