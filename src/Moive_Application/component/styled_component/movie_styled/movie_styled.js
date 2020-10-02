import styled from 'styled-components';

const ContainerMovie = styled.div`
    width : 100%;
    display : ${props => props.display};
    grid-template-columns : ${props => props.row ? props.row.map(item => item !== 'auto' ? item + '%' : 'auto ') : '0'};
    justify-items : ${props => props.justify};
    gap : ${props => props.gap + 'px'};
    text-align : ${props => props.align};
    align-items : ${props => props.alignItem};
    align-content : ${props => props.alignContent};
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
    cursor: pointer;
    background-size : cover;
    
    @media ${(props) => props.theme.Media.smartphone} {
        height : ${props => props.heightResS ? props.heightResS + 'vh' : 'auto'};
        margin-top: ${props => props.marginTopResS + '%'};
    }
    
    @media ${(props) => props.theme.Media.ipad} {
        height : ${props => props.heightResT ? props.heightResT + 'vh' : 'auto'};
        margin-top : ${props => props.marginTopResT + '%'};
        background-size : contain;
        background-repeat : no-repeat;
    }
`;

const ImagePoster = styled.img`
    width : 100%;
    height : 100%;
`;

const ContainerMovieDetail = styled(ContainerMovie)`
    height : ${props => props.height + 'vh'};
    position : relative;
    
    @media ${(props) => props.theme.Media.smartphone} {
        height : auto;
        margin-top : 15%;
    }

    @media ${(props) => props.theme.Media.ipad} {
        height : auto;
        margin-top : 5%;
    }
`;

const FrameVideo = styled.iframe`
    border : 0px;
    width : 90%;
    height : 35vh;

    @media ${(props) => props.theme.Media.smartphone} {
        margin-top : ${props => props.marginTopResS + '%'};
    }
`;

export {ContainerMovie, Card, CardHeader, ImagePoster, ContainerMovieDetail,FrameVideo};