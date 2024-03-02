import styled from "@emotion/styled";


export const SliderContainer = styled.div`
    margin-top: 20px;
    overflow: hidden;
    max-width: 425px;
    width: 100%;
`;

export const Image = styled.img`
    padding-left: 8px;
    padding-right: 8px;

    &:first-of-type {
        padding-left: 0;
    }
    
    @media screen and (min-width: 319px) {
        width: 130px;
    }
    @media screen and (min-width: 374.9px) {
        width: 103px;
    }
    @media screen and (min-width: 424.9px) {
        width: 120px;
    }
`;
