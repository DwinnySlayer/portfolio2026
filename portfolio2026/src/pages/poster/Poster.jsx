import React from 'react'
import "./Poster.css"

import newarrival from "../../assets/New Arrivals Poster jan 22.png";
import paubossale from "../../assets/PAUBOS SALE POSTER OPTION 1.png"
import clearance from "../../assets/CLEARANCE.png"

export default function Poster() {
    return (
        <div className="poster">
            <div className="poster-container">
                <div className="poster-row">
                    <img src={newarrival} alt="poster" className="poster-image-vertical"></img>
                    <img src={paubossale} alt="poster" className="poster-image-vertical"></img>
                </div>
            </div>

            <div className="poster-container">
                <div className="poster-row">
                    <img src={clearance} alt="poster" className="poster-image-horizontal"></img>
                </div>
            </div>
        </div>
    )
}
