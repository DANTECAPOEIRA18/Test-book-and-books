import React, { FC, useState } from "react";
import { TiMediaPlay } from "react-icons/ti";


const NavBarComponent: FC = () => {

    const [showDropdown, setShowDropdown] = useState<boolean>(false);
    const [showSubmenu, setShowSubmenu] = useState<boolean>(false);

    const handleMouseOver = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.currentTarget.style.color = '#dddddd';
    };
    const handleMouseOut = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.currentTarget.style.color = '#ffffff';
    };

    return (
        <header className="navbargen">
            <nav>
                <ul className="nav-list">
                    <li className="nav-item"><a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Home</a></li>
                    <li className="nav-item">
                        <a href="#" onMouseOver={handleMouseOver} onMouseLeave={handleMouseOut} onClick={() => setShowDropdown(!showDropdown)} id="Pages">Pages</a>
                        {showDropdown && (
                            <div className="dropdown-menu" onMouseLeave={() => setShowDropdown(false)}>
                                <a href="#" >
                                    <p>Page 1</p>
                                </a>
                                <hr />
                                <a href="#">
                                    <p>Page 2</p>
                                </a>
                                <hr />
                                <a className="submenu-label-principal" href="#" onClick={() => setShowSubmenu(!showSubmenu)}>
                                    <p className="submenu-text">Page 3</p>
                                    <TiMediaPlay className="submenu-image" />
                                </a>
                                {showSubmenu && (
                                    <div className="submenu">
                                        <hr />
                                        <a className="submenu-label" href="#">Item 1</a>
                                        <hr />
                                        <a className="submenu-label" href="#">Item 2</a>
                                        <hr />
                                        <a className="submenu-label" href="#">Item 3</a>
                                    </div>
                                )}
                                
                                
                            </div>
                        )}
                    </li>
                    <li className="nav-item"><a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>About</a></li>
                    <li className="nav-item"><a href="#" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default NavBarComponent;
