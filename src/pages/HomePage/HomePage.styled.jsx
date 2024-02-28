import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    padding-top: 25px;
    padding-bottom: 25px;
    align-items: center;
    justify-content: center;
    padding-right: 15px;
    background: rgb(25,30,68);
    background: radial-gradient(circle, rgba(25,30,68,1) 0%, rgba(0,0,0,1) 97%);
`;

export const Banner = styled.div`
    width: 100%;
    height: 300px;
    background-color: white;
    border-radius: 6px;
    box-shadow: rgba(30, 44, 138, 0.4) 0px 2px 4px, rgba(30, 44, 138, 0.3) 0px 7px 13px -3px, rgba(30, 44, 138, 0.2) 0px -3px 0px inset;
`;