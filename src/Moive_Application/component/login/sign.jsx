import React, { Fragment } from 'react';
import * as Global from '../styled_component/global_styled';
import * as  Styled from '../styled_component/login_styled/login_style';

function Sign() {
    return(
        <Fragment>
            <form>
                <Styled.Label htmlFor="email" margin_top="5">Email</Styled.Label>
                <Styled.Input type="email" id="email" placeholder="renalfrontend@gmail.com" required />
                <Styled.Label htmlFor="password" margin_top="5">Password</Styled.Label>
                <Styled.Input type="password" id="password" placeholder="Password" required />

                <Styled.ButtonSign type="submit">Masuk</Styled.ButtonSign>
            </form>
        </Fragment>
    )
}

export default Sign;