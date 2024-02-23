import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const AppBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (<header>
        <p>AppBar</p>
        <button type="button" onClick={handleClick}><RxHamburgerMenu /></button>


        {isOpen && (<div>
            <p>sidebar</p>
            <button>Click</button>
        </div>)}
    </header>)
}

export default AppBar;