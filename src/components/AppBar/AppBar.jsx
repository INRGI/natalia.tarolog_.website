import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, ButtonClose, Container, LinkContainer, Logo, LogoContainer, LogoText, RotatingImage, SideBar, SideBarContainer, StyledLink } from "./AppBar.styled";
import { IoMdClose } from "react-icons/io";

const AppBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (<Container isOpen={isOpen}>
        <LogoContainer>
            <Logo />
            <LogoText >Natalia Tarolog</LogoText>
        </LogoContainer>
        
        <Button type="button" onClick={handleClick}><RxHamburgerMenu size={28} color="white"/></Button>


        <SideBar isOpen={isOpen}>
            
            <RotatingImage />
            <SideBarContainer>
                <ButtonClose type="button" onClick={handleClick}><IoMdClose color="white" size={32} /></ButtonClose>
                <LinkContainer>
                    <StyledLink to='/'>Home</StyledLink>
                    <StyledLink to='/cards'>Cards</StyledLink>
                    <StyledLink to='/history'>History</StyledLink>
                </LinkContainer>
            </SideBarContainer> 
        
        </SideBar>
    </Container>)
}

export default AppBar;