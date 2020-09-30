import styled from 'styled-components';

const ContainerMovie = styled.div`
    width : 100%;
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
        grid-template-columns : ${props => props.rowResS ? props.rowResS.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
        margin-top: ${props => props.marginTopResS + '%'};
    }

    @media ${(props) => props.theme.Media.ipad} {
        margin-top : ${props => props.marginTopResT + '%'};
        grid-template-columns : ${props => props.rowResT ? props.rowResT.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
    }
`;

const Card = styled.div`
    width : 100% !important;
    height : auto;
    background-color : ${props => props.bg};
`;

const CardHeader = styled.div`
    width : 100% !important;
    height : ${props => props.height ? props.height + 'vh' : 'auto'};
    background : url('${props => props.url}');
    background-size : cover;
    cursor: pointer;

    @media ${(props) => props.theme.Media.smartphone} {
        height : ${props => props.heightResS ? props.heightResS + 'vh' : 'auto'};
        margin-top: ${props => props.marginTopResS + '%'};
    }

    @media ${(props) => props.theme.Media.ipad} {
        height : ${props => props.heightResT ? props.heightResT + 'vh' : 'auto'};
        margin-top : ${props => props.marginTopResT + '%'};
    }
`;

export {ContainerMovie, Card, CardHeader};