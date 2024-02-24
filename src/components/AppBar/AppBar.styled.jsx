import styled from "@emotion/styled";

export const Container = styled.header`
    background-color: #4a4e69;
    display: flex;
    height: 52px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    justify-content: space-between;
    padding-left:15px;
    padding-right:15px;
`;

export const Button = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    background-color: transparent;
`;

export const SideBar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
    width: 300px;
    height: 100vh; 
    background-color: #22223b;
    transition: right 0.3s ease;  
`;