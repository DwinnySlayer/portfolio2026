import {Link, NavLink} from 'react-router-dom';
import './NavBar.css'; // Don't forget to import the CSS!

import homeIcon from '../assets/Home_Icon.png';
import profileIcon from '../assets/Profile_Icon.png';
import designIcon from '../assets/Design_Icon.png';
import posterIcon from '../assets/Poster_Icon.png';
import openIcon from '../assets/Open_Icon.png'; // The double arrow
import closeIcon from '../assets/Close_Icon.png'; // The reverse arrow
import {useState} from "react";
import starfish from "../assets/starfish.png";
import selfpicture from "../assets/selfpicture.png";
import shell from "../assets/shell.png";

function NavBar() {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-left-side">
                    <div className={`nav-stack ${isOpen ? 'open' : ''}`}>
                        <div className="nav-links">
                            {/* The clickable toggle button */}
                            <div className="nav-item toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                                <img
                                    src={isOpen ? closeIcon : openIcon}
                                    alt="Toggle Menu"
                                    className="icon-img"
                                />
                            </div>

                            {/* Added data-name to each NavLink */}
                            <NavLink to="/design" className="nav-item item-4" data-name="DESIGN">
                                <img src={designIcon} alt="Design" className="icon-img"/>
                            </NavLink>
                            <NavLink to="/poster" className="nav-item item-3" data-name="POSTERS">
                                <img src={posterIcon} alt="Poster" className="icon-img" />
                            </NavLink>
                            <NavLink to="/profile" className="nav-item item-2" data-name="PROFILE">
                                <img src={profileIcon} alt="Profile" className="icon-img" />
                            </NavLink>
                            <NavLink to="/" className="nav-item item-1" data-name="HOME">
                                <img src={homeIcon} alt="Home" className="icon-img" />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="nav-right-side">
                    <img src={starfish} alt="icon" className="starfish-img"></img>
                    <NavLink to="/contacts" data-name="CONTACTS" className="contact-link">
                        <img src={selfpicture} alt="icon" className="icon-img"></img>
                    </NavLink>
                    <img src={shell} alt="icon" className="starfish-img"></img>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;