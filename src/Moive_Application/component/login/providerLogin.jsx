import React, { Fragment, useState } from 'react';
import {BrowserRouter, Switch,Route, useHistory} from "react-router-dom";
import styled, { ThemeProvider } from 'styled-components';
import ThemeApplication from '../styled_component/theme';
import Joker from '../../img/joker1.jpg';
import Register from './register';
import Sign from './sign';
import * as Styled from '../styled_component/login_styled/login_style';
import * as Global from '../styled_component/global_styled';

function Route_Login() {
    return(
        <Fragment>
            <Switch>
                <Route exact path='/'  />
            </Switch>
        </Fragment>
    ) 
}

function ProviderLogin() {
    const history = useHistory();
    const [state, setState] = useState('Masuk');

    const handlePage = (e) => {
        if(e.target.dataset.page == 'Masuk') setState(title => title = 'Masuk');
        else setState(title => title = 'Daftar');
    }

    return(
        <ThemeProvider theme={ThemeApplication}>
            <Route_Login/>
            
            <Styled.ContainerLogin>
                {/* Template 1 */}
                <Styled.TemplateLogin img={Joker} after padding="60" height_responsive="80">
                    
                    <Global.GridTemplate margin="10" row={['100']} rowResS={['100']} rowResT={['100']} items="center">
                        <Styled.Logo/>
                        <Styled.Title>RENALFILM</Styled.Title>
                    </Global.GridTemplate>

                    <Global.GridTemplate margin="5" row={['100']}  rowResS={['100']} rowResT={['100']} gap='20'>
                        <Global.ParagrafSmall opacity="0.8">RenalFilm adalah layanan Penyedia informasi film di seluruh dunia. Web ini dapat di gunakan untuk mencari film dan detail dari film tersebut, dan Kamu bisa menonton sepuasnya, kapan pun kamu mau tanpa satu iklan pun – semuanya. Selalu ada tontonan baru dan acara TV serta film baru yang ditambahkan setiap minggu!</Global.ParagrafSmall>

                        <Global.ParagrafSmall opacity="0.8">
                            Tonton di mana pun dan kapan pun, di perangkat apa saja. Masuk ke akun RenalFilm-mu untuk menonton langsung di RenalFilm dari komputer pribadi atau di perangkat yang terhubung ke Internet dan mendukung aplikasi RenalFilm, termasuk smart TV, smartphone, tablet, pemutar media streaming, dan konsol game.

                        </Global.ParagrafSmall>
                    </Global.GridTemplate>
                </Styled.TemplateLogin>
                
                {/* Template 2 */}
                <Styled.TemplateLogin align="center" padding="30" padding_bottom_ipad="50" padding_bottom_smartphone="50">

                    <Global.GridTemplate row={['100']} rowResS={['100']} rowResT={['100']} margin="10" align="center">
                        <main className="choiseMain">
                            <Styled.Link onClick={handlePage} data-page="Masuk">Masuk</Styled.Link>
                            <Styled.Link opacity="0.4">/</Styled.Link>
                            <Styled.Link opacity="0.4" onClick={handlePage} data-page="Daftar">Daftar</Styled.Link>
                        </main>
                    </Global.GridTemplate>

                    <Global.GridTemplate row={['100']} rowResS={['100']}  rowResT={['100']}>
                        {(state == 'Masuk') ? <Sign/> : <Register/>}
                    </Global.GridTemplate>

                </Styled.TemplateLogin>

            </Styled.ContainerLogin>
        </ThemeProvider>
    )
}

export default ProviderLogin;