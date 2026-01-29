import React from 'react'
import "./Design.css"

import webtitle from "../../assets/webtitle.png";
import resbac1 from "../../assets/resbacapp1.png";
import resbac2 from "../../assets/resbacapp2.png";
import resbacweb from "../../assets/resbacweb.png";
import resbaclogo1 from "../../assets/resbaclogo1.png";
import resbaclogo2 from "../../assets/resbaclogo2.png";
import profiletitle from "../../assets/profiletitle.png";

export default function Design() {
    return (
        <div className="design">
            <div className="webdev-header-title">
                <img src={webtitle} alt="title" className="webdev-title-img"></img>
                <h1>Test Rendering</h1>
            </div>
        </div>
    )
}
