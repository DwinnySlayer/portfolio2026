import React, {useState} from "react";
import "./Home.css";

//importing photos
import titlehomeshadow from "../../assets/TitleHomeShadow.png";
import hometitle from "../../assets/HomeTitle.png";
import Typography from "../../components/Typography.jsx";

function Home() {

    return (
        <div className="home">
            <div className="home-title">
                <img src={titlehomeshadow} className="title-png shadow" alt="project-title"/>
                <img src={hometitle} className="title-png main" alt="project-title"/>a
            </div>

            <div className="home-sub-title">
                <div className="hello-container">
                    <span className="hello-bold">Hello,&nbsp;</span>
                    <span className="im-regular"> Im&nbsp;</span>
                    <span className="name-montecarlo">Dwin!</span>
                </div>
            </div>

            <Typography variant="p1" className="paragraph-intro">
                Hi, I’m Dwin, a passionate design and frontend
                development intern with a strong interest in creating clean,
                user-friendly, and visually engaging digital experiences.
                I enjoy turning ideas into functional interfaces
                by combining thoughtful design with responsive code.
            </Typography>

            {/*<p className="paragraph-intro">*/}
            {/*    Hi, I’m Dwin, a passionate design and frontend*/}
            {/*    development intern with a strong interest in creating clean,*/}
            {/*    user-friendly, and visually engaging digital experiences.*/}
            {/*    I enjoy turning ideas into functional interfaces*/}
            {/*    by combining thoughtful design with responsive code.*/}
            {/*</p>*/}

        </div>
    );
}

export default Home;