import React from 'react';
import styled, { ThemeProvider, css } from 'styled-components';

const GridTemplate = styled.div`
    width : 100%;
    display : grid;
    grid-template-columns : ${props => props.row.map(item => item + '%')};
    margin-top : ${props => props.marginTop + '%'};
    justify-items : ${props => props.items};
    justify-content : center;
    gap : ${props => props.gap + 'px'};

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

    @media ${(props) => props.theme.Media.smartphone} {
        margin : 0%;
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
    font-size : ${props => props.fSize + 'rem'};
    color: ${props => props.color};
    font-family : ${props => props.fontFamily};
`;

const Row = styled.div`
    width : ${props => props.width};
    display : ${props => props.display};
    grid-template-columns : ${props => props.row ? props.row.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
    justify-items : ${props => props.justify};
    gap : ${props => props.gap + 'px'};
    text-align : ${props => props.align};
    align-items : ${props => props.alignItem};
    justify-content : ${props => props.justify};
    padding : ${props => props.padding + 'px'};
    margin-top : ${props => props.marginTop + '%'};
    box-sizing : border-box;

    @media ${(props) => props.theme.Media.smartphone} {
        grid-template-columns : ${props => props.rowResS && props.rowResS.map(item => item !== 'auto' ? item + '%' : 'auto ')};
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

export {GridTemplate, Row, ParagrafSmall,ParagrafTitle,Input, Button};