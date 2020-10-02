import React, { createContext, Fragment,useState } from 'react';
import { useRef } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import * as Global from '../styled_component/global_styled';
import * as  Styled from '../styled_component/login_styled/login_style';

import SweetAlert from 'sweetalert2-react';
import { useEffect } from 'react';

function Sign() {
    const [bool1, setBool1] = useState(false);
    const [bool2, setBool2] = useState(false);
    const [bool3, setBool3] = useState(false);
    const inputEmail = useRef();
    const inputPassword = useRef();
    const history = useHistory();
    let data = JSON.parse(localStorage.getItem('login'));

    const RedirectLogin = (e) => {
        e.preventDefault();

        if(inputEmail.current.value == '' || inputPassword.current.value === '') setBool1(true);
        else  {
             if(data == null) setBool3(true)
            else {
                data.some((item,index) =>  {
                    if(item.email === inputEmail.current.value && item.password === inputPassword.current.value) {
                        history.push({
                            pathname : '/movie',
                            state : {inputEmail : inputEmail.current.value, inputPassword : inputPassword.current.value}
                        });
    
                        return true;
                    }else if(index == data.length - 1){
                        setBool2(true);
                    }
                })
             }
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
                show={bool1}
                text="Data belum terisi lengkap"
                confirmButtonColor= 'red'
                onConfirm={() => setBool1(false)}
            />

            <SweetAlert
                icons='warning'
                show={bool2}
                text="Alamat email / password yang anda masukan salah"
                confirmButtonColor= 'red'
                onConfirm={() => setBool2(false)}
            />

            <SweetAlert
                icons='warning'
                show={bool3}
                text="Hmmm, sistem masih sepi pengguna nih, yuk sobat RenalFilm registrasi terlebih dahulu :)"
                confirmButtonColor= 'red'
                onConfirm={() => setBool3(false)}
            />
        </Fragment>
    )
}

export default Sign;