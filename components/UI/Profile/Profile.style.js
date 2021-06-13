import styled from 'styled-components';


export const WrapperProfile = styled.div`
    max-width: 700px;
    margin: 0em auto;
    padding: 1em;
    border: 1px solid #EAEAEB;
    border-radius: 5px;
    box-shadow: rgb(38 38 39 / 5%) 0px 1px 6px;
`;

export const BodyProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #EAEAEB;
`;

export const ImgProfile = styled.img`
    width: 180px;
`;

export const TitleProfile = styled.h1`
    font-size: 30px;
    text-transform: uppercase;
`;