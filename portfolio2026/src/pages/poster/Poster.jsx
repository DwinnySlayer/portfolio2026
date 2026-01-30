import React, { useState, useEffect } from 'react';
import "./Poster.css"

import newarrival from "../../assets/New Arrivals Poster jan 22.png";
import paubossale from "../../assets/PAUBOS SALE POSTER OPTION 1.png"
import clearance from "../../assets/CLEARANCE.png"
import awards from "../../assets/Award Option 2.png"
import warehouse from "../../assets/warehouse opening FINAL.png"
import fbcover from "../../assets/FB COVER SISSY FINAL.png"
import fliers from  "../../assets/FLIERS dark.png"
import grandsale from "../../assets/grand sale.png"
import header from "../../assets/posterdesigntext.png"
import Typography from "../../components/Typography.jsx";
import canva from "../../assets/canvalogo.png"
import title from "../../assets/titleicon.png"
import tool from "../../assets/toolicon.png"
import figma from "../../assets/figmaicon.png"
import Profile from "../profile/Profile.jsx";

export default function Poster() {

    return (
            <div className="poster">
                {/*<div className="page-header-title">*/}
                {/*    <img src={header} alt="poster-header" className="page-header-image"></img>*/}
                {/*</div>*/}

                <div className="poster-container">
                    <div className="poster-row-vertical">
                        <div className="poster-card">
                            <img src={newarrival} alt="poster" className="poster-image-vertical"></img>
                            <div className="poster-description-box">
                                <div className="poster-header">
                                    <img src={title} alt="icon" className="poster-icons"></img>
                                    <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                        NEW ARRIVAL POSTER
                                    </Typography>
                                </div>

                                <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                    Design Description | This poster depicts the message of new arrival items from Japan.
                                    Particularly, ceramics and surplus items. The design process consider these elements
                                    in order to portray a perfect message of new arrival items.
                                </Typography>

                                <div className="poster-card-footer">
                                    <div className="footer-container">
                                        <img src={tool} alt="icon" className="poster-icons"></img>
                                        <img src={figma} alt="icon" className="poster-icons"></img>
                                        <img src={canva} alt="icon" className="poster-icons"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poster-card">
                            <img src={grandsale} alt="poster" className="poster-image-vertical"></img>
                            <div className="poster-description-box">
                                <div className="poster-header">
                                    <img src={title} alt="icon" className="poster-icons"></img>
                                    <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                        GRAND SALE POSTER
                                    </Typography>
                                </div>

                                <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                    Design Description | Poster design for grand sale announcement, showcasing that
                                    all items would be 30%-40% off!
                                </Typography>

                                <div className="poster-card-footer">
                                    <div className="footer-container">
                                        <img src={tool} alt="icon" className="poster-icons"></img>
                                        <img src={figma} alt="icon" className="poster-icons"></img>
                                        <img src={canva} alt="icon" className="poster-icons"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poster-card">
                            <img src={fliers} alt="poster" className="poster-image-vertical"></img>
                            <div className="poster-description-box">
                                <div className="poster-header">
                                    <img src={title} alt="icon" className="poster-icons"></img>
                                    <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                        FLIER POSTER
                                    </Typography>
                                </div>

                                <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                    Design Description | Fliers to be disseminated to in the grand opening of showroom warehouse.
                                    This contains details like the location, data, time, and items!
                                </Typography>

                                <div className="poster-card-footer">
                                    <div className="footer-container">
                                        <img src={tool} alt="icon" className="poster-icons"></img>
                                        <img src={figma} alt="icon" className="poster-icons"></img>
                                        <img src={canva} alt="icon" className="poster-icons"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poster-card">
                            <img src={paubossale} alt="poster" className="poster-image-vertical"></img>
                            <div className="poster-description-box">
                                <div className="poster-header">
                                    <img src={title} alt="icon" className="poster-icons"></img>
                                    <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                        PAUBOS SALE POSTER
                                    </Typography>
                                </div>

                                <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                    Design Description | Poster to announce that all items must go, almost like a clearance sale!
                                </Typography>

                                <div className="poster-card-footer">
                                    <div className="footer-container">
                                        <img src={tool} alt="icon" className="poster-icons"></img>
                                        <img src={figma} alt="icon" className="poster-icons"></img>
                                        <img src={canva} alt="icon" className="poster-icons"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="poster-container">
                    <div className="poster-row-vertical">
                        <div className="poster-row-horizontal">
                            <div className="poster-card">
                                <img src={warehouse} alt="poster" className="poster-image-horizontal"></img>
                                <div className="poster-description-box">
                                    <div className="poster-header">
                                        <img src={title} alt="icon" className="poster-icons"></img>
                                        <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                            GRAND OPENING POSTER
                                        </Typography>
                                    </div>

                                    <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                        Design Description | Grand opening poster to announce that the new warehouse is open!
                                        this contains the contact, date, time, and address!
                                    </Typography>

                                    <div className="poster-card-footer">
                                        <div className="footer-container">
                                            <img src={tool} alt="icon" className="poster-icons"></img>
                                            <img src={figma} alt="icon" className="poster-icons"></img>
                                            <img src={canva} alt="icon" className="poster-icons"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="poster-card">
                                <img src={fbcover} alt="poster" className="poster-image-horizontal"></img>
                                <div className="poster-description-box">
                                    <div className="poster-header">
                                        <img src={title} alt="icon" className="poster-icons"></img>
                                        <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                            FACEBOOK COVER POSTER
                                        </Typography>
                                    </div>

                                    <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                        Design Description | This is the facebook cover of sissy sofab business page!
                                        this contains the location of the physical store, main warehouse, and showroom warehouse!
                                    </Typography>

                                    <div className="poster-card-footer">
                                        <div className="footer-container">
                                            <img src={tool} alt="icon" className="poster-icons"></img>
                                            <img src={figma} alt="icon" className="poster-icons"></img>
                                            <img src={canva} alt="icon" className="poster-icons"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="poster-row-horizontal">
                            <div className="poster-card">
                                <img src={clearance} alt="poster" className="poster-image-horizontal"></img>
                                <div className="poster-description-box">
                                    <div className="poster-header">
                                        <img src={title} alt="icon" className="poster-icons"></img>
                                        <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                            CLEARANCE POSTER SALE
                                        </Typography>
                                    </div>

                                    <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                        Design Description | Clearance sale poster, this shows the clearance sale items! all items must go!
                                    </Typography>

                                    <div className="poster-card-footer">
                                        <div className="footer-container">
                                            <img src={tool} alt="icon" className="poster-icons"></img>
                                            <img src={figma} alt="icon" className="poster-icons"></img>
                                            <img src={canva} alt="icon" className="poster-icons"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="poster-card">
                                <img src={awards} alt="poster" className="poster-image-horizontal"></img>
                                <div className="poster-description-box">
                                    <div className="poster-header">
                                        <img src={title} alt="icon" className="poster-icons"></img>
                                        <Typography variant="h4" style={{lineHeight: "1.2"}}>
                                            AWARD POSTER
                                        </Typography>
                                    </div>

                                    <Typography variant="p2" style={{lineHeight: "1.2"}}>
                                        Design Description | a poster to announce that the business won an award,
                                        adding to the business credibility and reliability!
                                    </Typography>

                                    <div className="poster-card-footer">
                                        <div className="footer-container">
                                            <img src={tool} alt="icon" className="poster-icons"></img>
                                            <img src={figma} alt="icon" className="poster-icons"></img>
                                            <img src={canva} alt="icon" className="poster-icons"></img>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}