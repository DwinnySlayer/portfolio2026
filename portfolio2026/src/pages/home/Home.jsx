import React, {useState} from "react";
import "./Home.css";

//importing photos
import titlehomeshadow from "../../assets/TitleHomeShadow.png";
import hometitle from "../../assets/HomeTitle.png";
import Typography from "../../components/Typography.jsx";
import jellyfish from "../../assets/jellyfish.png";

function Home() {

    return (
        <div className="home">
            {/*<img src={jellyfish} className="jellyfish-float" alt="jellyfish" />*/}

            {/* Side Jellyfish */}
            <img src={jellyfish} className="jelly-itch left" alt="jellyfish-left" />
            <img src={jellyfish} className="jelly-itch right" alt="jellyfish-right" />

            <div className="home-title">
                <img src={titlehomeshadow} className="title-png shadow" alt="project-title"/>
                <img src={hometitle} className="title-png main" alt="project-title"/>
            </div>

            <div className="home-sub-title">
                <div className="hello-container">
                    <span className="hello-bold">Hello, </span>
                    <span className="im-regular"> Im</span>
                    <span className="name-montecarlo">Dwin!</span>
                </div>
            </div>

            <Typography variant="p1" className="paragraph-intro">
                A passionate design and frontend
                development intern with a strong interest in creating clean,
                user-friendly, and visually engaging digital experiences.
                I enjoy turning ideas into functional interfaces
                by combining thoughtful design with responsive code.
            </Typography>
        </div>
    );
}

export default Home;