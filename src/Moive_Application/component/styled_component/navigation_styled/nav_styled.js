import React from 'react';
import styled, {css, createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        background : #181818;
    }
`;

const ContainerNav = styled.div`
    width : 100%;
    background : #000000;
    position : fixed;
    top : 0;
    display : flex;
    justify-content : center;
    box-sizing : border-box;
    z-index : 2;

    @media ${(props) => props.theme.Media.smartphone} { 
        background : rgba(0,0,0,.75);
    }
`;

const NavMovie = styled.nav`
    width : 90%;
    display : grid;
    grid-template-columns : 20% 50%;
    justify-content : space-between;

    @media ${(props) => props.theme.Media.smartphone} { 
        width :100%;
        grid-template-columns : 10% 75%;
        justify-content : space-between;
        text-align : center;
    }

`;

const ButtonNav = styled.button`
    background : ${props => props.bg};
    border : ${props => props.border};
    padding : ${props => props.padding + 'px'};
    box-sizing: border-box;
    color : white;
    font-size : ${props => props.FontSize + 'em'};
    border-radius : 5px;
    cursor : pointer;
    font-family : sans-serif;

    @media ${(props) => props.theme.Media.smartphone} { 
        padding : 10px;
    }
`;

export {NavMovie, ContainerNav, ButtonNav, GlobalStyle};