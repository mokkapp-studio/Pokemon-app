import styled from 'styled-components';


export const WrapperCard = styled.article`
    padding: 1em;
    width: 100%;
    background: #fff;
    margin-bottom: 1em;
    border: 1px solid #ececec;
    box-shadow: rgb(38 38 39 / 5%) 0px 1px 6px;
    &:hover{
        box-shadow: rgb(38 38 39 / 19%) 0px 1px 9px 2px;
    }
`;

export const Header = styled.header`
    border-bottom: 1px solid #ececec;
    h3{
        color: #38404a;
        font-size: 20px;
        text-align: center;
        text-transform: uppercase;
        font-weight: 400;
    }
`;