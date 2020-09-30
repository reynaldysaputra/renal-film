import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';
import logoR from '../../../img/logoR.png';

const ContainerLogin = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : 60% 40%;
        
    @media ${(props) => props.theme.Media.smartphone} {
        grid-template-columns : 100%;
    }

    @media ${(props) => props.theme.Media.ipad} {
        grid-template-columns : 100%;
    }
`;

const TemplateLogin = styled.section`
    width : 100%;
    height : 100vh;
    background : url(${props => props.img ? props.img : false});
    background-size : cover;
    background-position : 50%;
    position: relative;
    padding : ${props => props.padding + 'px'};
    box-sizing : border-box;
    align-items : ${props => props.align};

    ${props => props.after && css`
        ::before {
            content : ' ';
            width : 100%;
            height : 100%;
            position : absolute;
            background : black;
            opacity : 0.7;
            top : 0;
            left : 0;
        }
    `}

    @media ${(props) => props.theme.Media.smartphone} {
        padding : 20px;
        height : auto;
        padding-bottom : ${props => props.padding_bottom_smartphone + 'px'}
    }

    @media ${(props) => props.theme.Media.ipad} {
        height : auto !important;
        padding-bottom : ${props => props.padding_bottom_ipad + 'px'}
    }
`;

const Title = styled.h2 `
    font-family : 'Netflix';
    color : #E50D13;  
    position : relative;
    font-size : 3rem; 
    margin : 0px;
    letter-spacing : 3px;

    @media ${(props) => props.theme.Media.ipad} {
        font-size : 5rem;
    }    
`;

const Logo = styled.img.attrs(props => ({
    src : logoR
}))`
    width : 25%;
    position : relative;    
`;

const Link = styled.h3`
    color : #E50D13;  
    opacity : ${props => props.opacity};
    cursor: pointer;
    float : left;
    margin-right : 2%;
    opacity : ${props => props.opacity};
`;

const Label = styled.label`
    font-size : 1.2rem;
    color : #333;
    margin-top : ${props => props.margin_top + '%'};
    display : block;
`;

const Input = styled.input`
    width : 100%;
    padding : 10px;
    padding-left : 0px;
    box-sizing : border-box;
    border : 0px;
    border-bottom : 2px solid #333;
    outline : none;
    font-size : 1rem;
    color : #333;
    opacity : 0.5;
    margin-top : 3%;
`;

const ButtonSign = styled.button`
    width : 25%;
    font-size : 1.2rem;
    padding-top : 5px;
    padding-bottom : 5px;
    box-sizing : border-box;
    margin-top : 10%;
    background : #E50D13;
    color: white;
    font-family : sans-serif;
    border : 0px;
    cursor : pointer;
`;

export {ContainerLogin,TemplateLogin, Logo,Title, Link, Label, Input, ButtonSign};