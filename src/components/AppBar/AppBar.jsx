import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, Container, RotatingImage, SideBar } from "./AppBar.styled";
import { PiMagicWand } from "react-icons/pi";

const AppBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (<Container>
        <PiMagicWand size={28} color="white"/>
        <Button type="button" onClick={handleClick}><RxHamburgerMenu size={28} color="white"/></Button>


        {isOpen && (<SideBar isOpen={isOpen}>
            <RotatingImage />
                <p>sidebar</p>
                <button type="button" onClick={handleClick}>Click</button>
        
        </SideBar>)}
    </Container>)
}

export default AppBar;