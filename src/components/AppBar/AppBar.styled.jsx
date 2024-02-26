import styled from "@emotion/styled";
import back from '../images/backcircle.png';
import { keyframes } from '@emotion/react';
import { NavLink } from "react-router-dom";

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
    transition: right 500ms ease-in-out, background-color 500ms ease-in-out;
    backdrop-filter: blur(30px) saturate(2);
    -webkit-backdrop-filter: blur(30px) saturate(2);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    &:after{
        opacity: 0.3;
        transition: opacity 0.5s;
    }
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

export const ButtonClose = styled.button`
    margin: 15px;
    width: 32px;
    height: 32px;
    top: 0;
    right: 0;
    position: absolute;
    border: none;
    outline: none;

    cursor: pointer;
    background-color: transparent;
    &hover{
        color: grey;
    }
`;

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  width: 100%;
  height: 100%;
`

export const StyledLink = styled(NavLink)`
    color: #edf2f4;
    text-align: center;
    text-decoration: none;
    font-size: 32px;
    font-weight: bold;
    transition: background-color ease-in-out 0.2s;
    font-family: "Kode Mono", monospace;

  &.active {
    color: #c8b6ff;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`;