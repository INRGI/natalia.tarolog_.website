import styled from "@emotion/styled";
import back from '../images/backcircle.png';
import whitecircle from '../images/whitecircle.png';
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
    right: ${({ isOpen }) => (isOpen ? '0' : '-80%')};
    width: 80%;
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
    &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Тут можете змінити прозорість чорного кольору, щоб затемнення відповідало вашим потребам */
        z-index: -1; /* Щоб затемнення було під сайдбаром */
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Показуємо затемнення тільки коли сайдбар відкритий */
        transition: opacity 500ms ease-in-out; /* Плавний перехід для затемнення */
    }
`;



export const Container = styled.header`
    background-color: #0d1b2a;
    display: flex;
    height: 52px;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
    justify-content: space-between;
    padding-left:15px;
    padding-right:15px;
    &::after {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* Тут можете змінити прозорість чорного кольору, щоб затемнення відповідало вашим потребам */
        z-index: -1; /* Щоб затемнення було під сайдбаром */
        opacity: ${({ isOpen }) => (isOpen ? '1' : '0')}; /* Показуємо затемнення тільки коли сайдбар відкритий */
        transition: opacity 500ms ease-in-out; /* Плавний перехід для затемнення */
    }
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

export const LogoText = styled.p`
  margin: 0;
  padding: 0;
  font-family: "Kode Mono", monospace;
  font-size: 20px;
  color: #edf2f4;
`;

export const Logo = styled.div`
    width: 28px;
    height: 28px; 
    border-radius: 50%; 
    background-image: url(${whitecircle});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${rotateAnimation} 20s linear infinite; 
    
`

export const LogoContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  gap: 10px;
`