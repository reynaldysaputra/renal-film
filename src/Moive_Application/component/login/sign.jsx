import React, { createContext, Fragment,useState } from 'react';
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as Global from '../styled_component/global_styled';
import * as  Styled from '../styled_component/login_styled/login_style';

import SweetAlert from 'sweetalert2-react';

function Sign() {
    const [bool, setBool] = useState(false);
    const inputEmail = useRef();
    const inputPassword = useRef();
    const history = useHistory();

    const RedirectLogin = (e) => {
        e.preventDefault();

        if(inputEmail.current.value == '' || inputPassword.current.value === '') setBool(true);
        else {
            history.push({
                pathname : '/movie',
                state : {inputEmail : inputEmail.current.value, inputPassword : inputPassword.current.value}
            });
        }
    }
    
    return(
        <Fragment>
            <form>
                <Styled.Label htmlFor="email" margin_top="5">Email</Styled.Label>
                <Styled.Input type="email" id="email" placeholder="renalfrontend@gmail.com" ref={inputEmail} />
                <Styled.Label htmlFor="password" margin_top="5">Password</Styled.Label>
                <Styled.Input type="password" id="password" placeholder="Password" ref={inputPassword}/>

                <Styled.ButtonSign onClick={RedirectLogin}>Masuk</Styled.ButtonSign>
            </form>

            {/* SweetAlert */}
            <SweetAlert
                icons='warning'
                show={bool}
                text="Data belum terisi lengkap"
                confirmButtonColor= 'red'
                onConfirm={() => setBool(false)}
            />
        </Fragment>
    )
}

export default Sign;