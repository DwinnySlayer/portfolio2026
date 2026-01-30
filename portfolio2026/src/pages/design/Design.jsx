import React from 'react'
import "./Design.css"

import resbacweb from "../../assets/resbacweb.png";
import resbacapp from "../../assets/resbacaapp.png";
import Typography from "../../components/Typography.jsx";
import tool from "../../assets/toolicon.png";
import python from "../../assets/pythonicon.png";
import figma from "../../assets/figmaicon.png";
import webstorm from "../../assets/webstormicon.png";
import js from "../../assets/jsicon.png";
import html from "../../assets/htmlicon.png";
import css from "../../assets/cssicon.png";



export default function Design() {
    return (
        <div className="design">
            <div className="design-container-row">
                <div className="design-card">
                    <div className="left-card">
                        <img src={resbacweb} alt="image" className="titleimages"></img>
                    </div>
                    <div className="right-card">
                        <div className="card-content">
                            <Typography variant="h4" style={{lineHeight: "1.2"}}>
                               RESBAC WEB [Capstone Project]
                            </Typography>
                            <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                RESBAC is a multi-platform disaster response system that transforms vulnerability into visibility.
                                A Website for LGU to visualize, manage, and prioritize rescues in real time. Technology used are
                                K-means clustering and  XGBoost. Through RESBAC, barangays can gain a comprehensive vulnerability map and a visual representation of the at-risk population.
                            </Typography>

                            <div className="icon-row">
                                <img src={tool} alt="icon" className="card-icon-img"></img>
                                <img src={python} alt="icon" className="card-icon-img"></img>
                                <img src={figma} alt="icon" className="card-icon-img"></img>
                                <img src={js} alt="icon" className="card-icon-img"></img>
                                <img src={html} alt="icon" className="card-icon-img"></img>
                                <img src={css} alt="icon" className="card-icon-img"></img>
                            </div>

                            <div className="button-row">
                                {/* Figma Link */}
                                <a
                                    href="https://www.figma.com/design/QQwrUtiMQicKRBY6i51KD2/3-5.Files?node-id=22-71"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-btn"
                                >
                                    FIGMA
                                </a>

                                {/* Website Link */}
                                <a
                                    href="https://resbac-admin.online/login"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-btn dark"
                                >
                                    WEBSITE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="design-container-row">
                <div className="design-card">
                    <div className="left-card">
                        <img src={resbacapp} alt="image" className="titleimages"></img>
                    </div>
                    <div className="right-card">
                        <div className="card-content">
                            <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                RESBAC APPLICATION [Capstone Project]
                            </Typography>
                            <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                RESBAC is a multi-platform disaster response system that transforms vulnerability into visibility.
                                A mobile application for vulnerable citizens to register, request help, and mark themselves safe.
                                Each registration in the application gathers essential household data—household location, disability, medical needs, pregnancy status, and guardian contacts. These are verified by barangay officials and stored securely in a database.

                            </Typography>

                            <div className="icon-row">
                                <img src={tool} alt="icon" className="card-icon-img"></img>
                                <img src={python} alt="icon" className="card-icon-img"></img>
                                <img src={figma} alt="icon" className="card-icon-img"></img>
                                <img src={js} alt="icon" className="card-icon-img"></img>
                                <img src={html} alt="icon" className="card-icon-img"></img>
                                <img src={css} alt="icon" className="card-icon-img"></img>
                            </div>

                            <div className="button-row">
                                {/* Figma Link */}
                                <a
                                    href="https://www.figma.com/design/QQwrUtiMQicKRBY6i51KD2/3-5.Files?node-id=0-1"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-btn"
                                >
                                    FIGMA
                                </a>

                                {/* Website Link */}
                                <a
                                    href="https://drive.google.com/drive/folders/1PVYdBnydax0Ei9j8YUbbt3ma_DCZwIkA?usp=drive_link"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="nav-btn dark"
                                >
                                    APPLICATION
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
