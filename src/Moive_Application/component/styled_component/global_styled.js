import React from 'react';
import styled, { ThemeProvider, css, createGlobalStyle } from 'styled-components';

const GridTemplate = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : ${props => props.row.map(item => item + '%')};
    margin-top : ${props => props.marginTop + '%'};
    justify-items : ${props => props.items};
    justify-content : ${props => props.content};
    align-items : ${props => props.alignItem};
    gap : ${props => props.gap + 'px'};
    padding : ${props => props.padding + 'px'};
    box-sizing : border-box;

    @media ${(props) => props.theme.Media.smartphone} {
        grid-template-columns : ${props => props.rowResS ? props.rowResS.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
        margin-top: ${props => props.marginTopResS + '%'};
    }

    @media ${(props) => props.theme.Media.ipad} {
        margin-top : ${props => props.marginTopResT + '%'};
        grid-template-columns : ${props => props.rowResT ? props.rowResT.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
    }
`;

const ParagrafSmall = styled.p`
    color : ${props => props.color ? props.color : 'white'};
    position : relative;
    opacity : ${props => props.opacity};
    font-size : ${props => props.fSize + 'rem'};
    margin : ${props => props.margin ? props.margin + 'px' : '0'};
    margin-top : ${props => props.marginTop ? props.marginTop + 'px' : '0'};
    cursor : ${props => props.cursors && 'pointer'};

    @media ${(props) => props.theme.Media.smartphone} {
        margin : 0%;
        margin-top : ${props => props.marginTopResS ? props.marginTopResS + 'px' : '0'};
        display : ${props => props.none && 'none'};
        font-size : ${props => props.fSizeResS + 'rem'};
    }

    @media ${(props) => props.theme.Media.ipad} {
        font-size : 1.5rem;
        display : ${props => props.none && 'none'};
        font-size : ${props => props.fSizeResD + 'rem'};
    }    
`;

const ParagrafTitle = styled.h2`
    height : auto;
    font-size : ${props => props.fSize + 'rem'};
    color: ${props => props.color};
    font-family : ${props => props.fontFamily};
    text-align : ${props => props.textAlign};
    opacity : ${props => props.opacity};
    z-index : 2;

    @media ${(props) => props.theme.Media.smartphone} {
        margin : 0%;
        display : ${props => props.none && 'none'};
        font-size : ${props => props.fSizeResS + 'rem'};
    }

    @media ${(props) => props.theme.Media.ipad} {
        font-size : 1.5rem;
        display : ${props => props.none && 'none'};
        font-size : ${props => props.fSizeResT + 'rem'};
    }    
`;

const Row = styled.div`
    width : ${props => props.width + '%'};
    height : ${props => props.heightV ? props.heightV + 'vh' : props.height + '%'};
    background : ${props => props.bg};
    display : ${props => props.display};
    grid-template-columns : ${props => props.row ? props.row.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
    justify-items : ${props => props.justify};
    gap : ${props => props.gap + 'px'};
    text-align : ${props => props.align};
    align-items : ${props => props.alignItem};
    justify-content : ${props => props.justify};
    padding : ${props => props.padding + 'px'};
    padding-left : ${props => props.paddingLeft + '%'};
    padding-Right : ${props => props.paddingRight + '%'};
    margin-top : ${props => props.marginTop + '%'};
    position : ${props => props.position};
    box-sizing : border-box;
    background-image : url(${props => props.url});
    background-size : cover;
    min-height: 100%;
    float : ${props => props.float};
    background: ${props => props.bgLinearMovie && 'linear-gradient(to right,#171717 0,rgba(23,23,23,.98) 20%,rgba(23,23,23,.97) 25%,rgba(23,23,23,.95) 35%,rgba(23,23,23,.94) 40%,rgba(23,23,23,.92) 45%,rgba(23,23,23,.9) 50%,rgba(23,23,23,.87) 55%,rgba(23,23,23,.82) 60%,rgba(23,23,23,.75) 65%,rgba(23,23,23,.63) 70%,rgba(23,23,23,.45) 75%,rgba(23,23,23,.27) 80%,rgba(23,23,23,.15) 85%,rgba(23,23,23,.08) 90%,rgba(23,23,23,.03) 95%,rgba(23,23,23,0) 100%)'};

    @media ${(props) => props.theme.Media.smartphone} {
        width : ${props => props.widthResS + '%'};
        height : ${props => props.maxContentResS};
        grid-template-columns : ${props => props.rowResS && props.rowResS.map(item => item !== 'auto' ? item + '%' : 'auto ')};
        align-items : ${props => props.alignItemResS};
        position : ${props => props.positionResS};
        margin-top : ${props => props.marginTopResS + '%'};
        padding-left : ${props => props.paddingLeftResS + '%'};
        padding-Right : ${props => props.paddingRightResS + '%'};

        ${props => props.before && css`
            ::before {
                content : '';
                position : absolute;
                top : -21vh;
                z-index : 9;
                width : 100%;
                height : 20vh;
                background: ${props => props.bgLinearMovieResS && 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'};
            }
        `}
    }

    @media ${(props) => props.theme.Media.ipad} {
        width : ${props => props.widthResT + '%'};
        height : ${props => props.maxContentResT};
        position : ${props => props.positionResT};
        padding-left : ${props => props.paddingLeftResT + '%'};
        padding-Right : ${props => props.paddingRightResT + '%'};
    }
`;

const Input = styled.input.attrs(props => ({
   type : `${props.type}` 
}))`
    font-size : ${props => props.fSize + 'rem'};
    padding : ${props => props.padding + 'px'};
    box-sizing : border-box;
`;

const Button = styled.button`
    font-size : ${props => props.fSize + 'rem'};
    padding : ${props => props.padding + 'px'};
    box-sizing : border-box;
    cursor: pointer;
`;

const HR = styled.hr`
    width : ${props => props.width + '%'};
    height : ${props => props.height + 'vh'};
    color : ${props => props.color};
`;

const GlobalStyle = createGlobalStyle`
    body {
        background : #181818;
    }
`;

export {GridTemplate, Row, ParagrafSmall,ParagrafTitle,Input, Button, HR,GlobalStyle};