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
                            {/* The clickable toggle button - always on top */}
                            <div className="nav-item toggle-btn" onClick={() => setIsOpen(!isOpen)}>
                                <img
                                    src={isOpen ? closeIcon : openIcon}
                                    alt="Toggle Menu"
                                    className="icon-img"
                                />
                            </div>

                            {/* Home Icon */}
                            <NavLink to="/design" className="nav-item item-4">
                                <img src={designIcon} alt="Design" className="icon-img"/>
                            </NavLink>
                            <NavLink to="/poster" className="nav-item item-3">
                                <img src={posterIcon} alt="Poster" className="icon-img" />
                            </NavLink>
                            <NavLink to="/profile" className="nav-item item-2">
                                <img src={profileIcon} alt="Profile" className="icon-img" />
                            </NavLink>
                            <NavLink to="/" className="nav-item item-1">
                                <img src={homeIcon} alt="Home" className="icon-img" />
                            </NavLink>
                        </div>
                    </div>
                </div>

                <div className="nav-right-side">
                    <img src={starfish} alt="icon" className="starfish-img"></img>
                    <img src={selfpicture} alt="icon" className="icon-img"></img>
                    <img src={shell} alt="icon" className="starfish-img"></img>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;