import React, { Fragment } from 'react';
import * as Styled from '../styled_component/login_styled/login_style';

function Register() {
    return(
        <Fragment>
            <Styled.Label htmlFor="nama" margin_top="5">Nama Lengkap</Styled.Label>
            <Styled.Input type="text" id="nama" placeholder="Nama lengkap" required />
            <Styled.Label htmlFor="email" margin_top="5" >Email</Styled.Label>
            <Styled.Input type="email" id="email" placeholder="renalfrontend@gmail.com" required />
            <Styled.Label htmlFor="password" margin_top="5">Password</Styled.Label>
            <Styled.Input type="password" id="password" placeholder="Password" required />

            <Styled.ButtonSign>Daftar</Styled.ButtonSign>
        </Fragment>
    )
}

export default Register;