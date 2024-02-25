import styled from "@emotion/styled";
import back from '../images/backcircle.png';
import { keyframes } from '@emotion/react';

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const RotatingImage = styled.div`
    width: 500px;
    height: 500px; 
    border-radius: 50%; 
    background-image: url(${back});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${rotateAnimation} 20s linear infinite; 
    opacity: 0.5;
    z-index: -1;
    position: absolute;
`;


export const SideBar = styled.div`
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-300px')};
    width: 300px;
    height: 100vh; 
    background-color: #001219; 
    transition: 500ms ease-in-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;

`;


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
    &hover{
        color: grey;
    }
`;