import React, { Fragment, useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as Styled from '../styled_component/login_styled/login_style';
import SweetAlert from 'sweetalert2-react';

function Register() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const formInput = useRef();
    const [bool1, setBool1] = useState(false);
    let data = '';

    const CheckDataLocalStorage = () => {
        if(localStorage.getItem('login') !== null) {
            data = JSON.parse(localStorage.getItem('login'));
        }else {
            data = [''];
        }
        
        return data;
    }
    
    const handleRegister = (e) => {
        e.preventDefault();
        
        if(name.current.value == '' || email.current.value == '' || password.current.value == '') setBool1(true);
        else if(CheckDataLocalStorage()) {
            data.push({name : name.current.value, email : email.current.value, password : password.current.value});
            localStorage.setItem('login', JSON.stringify(data));      
            formInput.current.reset();      
        }
    }


    return(
        <Fragment>
            <form ref={formInput}>
                <Styled.Label htmlFor="nama" margin_top="5">Nama Lengkap</Styled.Label>
                <Styled.Input type="text" id="nama" placeholder="Nama lengkap" ref={name} />
                <Styled.Label htmlFor="email" margin_top="5" >Email</Styled.Label>
                <Styled.Input type="email" id="email" placeholder="renalfrontend@gmail.com" ref={email} />
                <Styled.Label htmlFor="password" margin_top="5">Password</Styled.Label>
                <Styled.Input type="password" id="password" placeholder="Password" ref={password} />
                
                <Styled.ButtonSign onClick={handleRegister}>Daftar</Styled.ButtonSign>
            </form>

            <SweetAlert
                icons='warning'
                show={bool1}
                text="Data Registrasi belum terisi lengkap"
                confirmButtonColor= 'red'
                onConfirm={() => setBool1(false)}
            />
        </Fragment>

    )
}

export default Register;