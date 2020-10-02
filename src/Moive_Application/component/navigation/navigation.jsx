import React, {useState} from 'react';
import {BrowserRouter, NavLink, Switch, Route} from 'react-router-dom';

import * as Styled from '../styled_component/navigation_styled/nav_styled';
import * as Global from '../styled_component/global_styled';
import { ThemeProvider } from 'styled-components';
import ThemeApplication from '../styled_component/theme';
import Module from '../../style/style.module.css';

import Movie_Search from '../movie_component/movie_search';
import Movie_Recomended from '../movie_component/movie_recomended';
import Movie_Detail from '../movie_component/movie_detail';

import SweetAlert from 'sweetalert2-react';

function Navigation() {
    const state = window.matchMedia('screen and (min-width: 200px) and (max-width : 568px').matches;
    const [bool, setBool] = useState(false);

return(
    <ThemeProvider theme={ThemeApplication}>
        <Styled.GlobalStyle/>

            <Styled.ContainerNav>
                <Styled.NavMovie>
                    <Global.Row alignItem='center' display='grid' row={['100']}>
                        {state ? 
                            <Global.ParagrafSmall fSize='1' fSizeResS='2.2' className={Module.link}>R</Global.ParagrafSmall> :
                            <Global.ParagrafSmall fSize='2'  className={Module.link}>RENALFILM</Global.ParagrafSmall>    
                        }
                    </Global.Row>

                    <Global.Row display='grid' row={['auto','auto', 'auto']} gap="10" align="center" alignItem='center' padding='5'>                          
                        <Global.ParagrafSmall none>
                            ACARA TV & FILM TAK TERBATAS
                        </Global.ParagrafSmall>

                        <Styled.ButtonNav bg="#E50D13" border="0" FontSize='1' padding='10' onClick={() => setBool(true)}>
                            AKSES FULL MOVIE                            
                        </Styled.ButtonNav>

                        <Styled.ButtonNav exact to='/about' className={Module.about}>Logout</Styled.ButtonNav>    
                    </Global.Row>
                </Styled.NavMovie>
            </Styled.ContainerNav>
                    
            <SweetAlert
                show={bool}
                title='&#128591'
                text="Maaf sistem sedang dalam perbaikan harap coba lagi nanti"
                confirmButtonColor= 'red'
                onConfirm={() => setBool(false)}
            />
        </ThemeProvider>
    )
}

export default Navigation;