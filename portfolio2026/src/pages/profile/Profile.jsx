import React from 'react'
import "./Profile.css"

// importing photos
import profilepic from "../../assets/myimage.png";
import accentblue from "../../assets/accentbar.png";
import textaccent from "../../assets/textaccent.png";
import frontend from "../../assets/frontendicon.png";
import design from "../../assets/designicon.png";
import blackprofile from "../../assets/profileiconblack.png";
import educicon from "../../assets/educicon.png";
import pup from "../../assets/pupicon.png";
import skills from "../../assets/skillsicon.png";
import js from "../../assets/jsicon.png";
import html from "../../assets/htmlicon.png";
import css from "../../assets/cssicon.png";
import webstorm from "../../assets/webstormicon.png";
import figma from "../../assets/figmaicon.png";
import expicon from "../../assets/expicon.png";
import sissy from "../../assets/workicon.png";
import vsicon from "../../assets/vsicon.png";
import python from "../../assets/pythonicon.png";


import { Divider } from '@mui/material';
import Typography from "../../components/Typography.jsx";

function Profile() {
    return (
        <div className="profile">
            <div className="profile-card">
                {/*left side of profile card*/}
                <div className="profile-left-side">
                    <img src={accentblue} alt="blue" className="accent-img"></img>
                    <img src={textaccent} alt="aboutme aboutme aboutme" className="aboutme-image"></img>
                    <img src={profilepic} alt="Mark Aldwin" className="profile-picture"></img>
                    <div className="age-badge">22</div>
                </div>

                <div className="profile-right-side">
                    <div className="roles-container">
                        <div className="roles-rectangle">
                            <img src={frontend} alt="frontendicon" className="roles-img"></img>
                            <Typography variant="h2">
                                Front-End Developer
                            </Typography>
                        </div>
                        <div className="roles-rectangle">
                            <img src={design} alt="designicon" className="roles-img"></img>
                            <Typography variant="h2">
                                Designer | UI/UX
                            </Typography>
                        </div>
                    </div>

                    <div className="section-container">
                        {/*name and introduction*/}
                        <div className="section-header-container">
                            <img src={blackprofile} alt="icon" className="section-icon"></img>
                            <Typography variant="h1">
                                Mark Aldwin D. Uriarte
                            </Typography>
                        </div>
                        <div className="section-body-container">
                            <Typography variant="p2" style={{ width: "auto", height: "auto"}}>
                                Hi, I’m Dwin — a design and frontend development enthusiast
                                who enjoys crafting clean, responsive, and user-centered interfaces.
                                I’m currently seeking an internship where I can learn, collaborate,
                                and turn creative ideas into engaging digital experiences.
                            </Typography>
                        </div>
                    </div>

                    <Divider sx={{ width: '90%', mx: 'auto', my: 1, borderColor: '#e0e0e0', borderBottomWidth: 1 }} />

                    {/*education*/}
                    <div className="section-container">
                        <div className="section-header-container">
                            <img src={educicon} alt="educicon" className="section-icon"></img>
                            <Typography variant="h4">
                                Education
                            </Typography>
                        </div>
                        <div className="section-body-container-educ">
                            <img src={pup} alt="pupicon" className="image-logo" />
                            <div className="logo-description-container">
                                <Typography variant="p1">
                                    Polytechnic University of the Philippines
                                </Typography>
                                <Typography variant="p2">
                                    Bachelor of Science in Information Technology
                                </Typography>
                            </div>
                        </div>
                    </div>

                    <Divider sx={{ width: '90%', mx: 'auto', my: 1, borderColor: '#e0e0e0', borderBottomWidth: 1 }} />

                    {/*skills*/}
                    <div className="section-container">
                        <div className="section-header-container">
                            <img src={skills} alt="skillsicon" className="section-icon"></img>
                            <Typography variant="h4">
                                Skills
                            </Typography>
                        </div>

                        <div className="section-body-container-skills">
                            <div className="section-body-container-skills-left">
                                <Typography variant="p1">
                                    Programming
                                </Typography>
                                <div className="section-body-container-skills-logo">
                                    <img src={js} alt="icon" className="icon-img"></img>
                                    <img src={html} alt="icon" className="icon-img"></img>
                                    <img src={css} alt="icon" className="icon-img"></img>
                                    <img src={python} alt="icon" className="icon-img"></img>
                                </div>
                            </div>
                            <div className="section-body-container-skills-right">
                                <Typography variant="p1">
                                    IDEs | Software
                                </Typography>
                                <div className="section-body-container-skills-logo">
                                    <img src={webstorm} alt="icon" className="icon-img"></img>
                                    <img src={figma} alt="icon" className="icon-img"></img>
                                    <img src={vsicon} alt="icon" className="icon-img"></img>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Divider sx={{ width: '90%', mx: 'auto', my: 1, borderColor: '#e0e0e0', borderBottomWidth: 1 }} />

                    {/*experience*/}
                    <div className="section-container">
                        <div className="section-header-container">
                            <img src={expicon} alt="educicon" className="section-icon"></img>
                            <Typography variant="h4">
                                Experience
                            </Typography>
                        </div>
                        <div className="section-body-container-educ">
                            <img src={sissy} alt="icon" className="image-logo"></img>
                            <div className="logo-description-container">
                                <Typography variant="p1">
                                    Sissy SoFab Japan Surplus and Variety Hub
                                </Typography>
                                <Typography variant="p2">
                                    Designer | Admin
                                </Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile