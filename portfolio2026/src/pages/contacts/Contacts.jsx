import React from 'react';
import './Contacts.css';
// import selfpicture from "../assets/selfpicture.png";


export default function Contacts() {
    return (
        <div className="contact-container">
            <header className="contact-header">
                {/*<img src={selfpicture} alt="John Martin" className="profile-img-large" />*/}
                <h1>Contact</h1>
                <p>Feel free to reach out for collaborations, project inquiries, or opportunities. I'm always open to connecting and discussing ideas.</p>
            </header>

            <div className="contact-grid">
                {/* Email Card */}
                <div className="contact-card">
                    <div className="icon">✉️</div>
                    <div className="info">
                        <h3>Email</h3>
                        <a href="mailto:uriartemarkaldwin@gmail.com">uriartemarkaldwin@gmail.com</a>
                    </div>
                </div>

                {/* Phone Card */}
                <div className="contact-card">
                    <div className="icon">📞</div>
                    <div className="info">
                        <h3>Phone</h3>
                        <p>0943 410 3391</p>
                        <p>0968 598 1179</p>
                    </div>
                </div>

                {/* LinkedIn Card */}
                <div className="contact-card">
                    <div className="icon">🔗</div>
                    <div className="info">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/mark-aldwin-uriarte-061a64298/" target="_blank" rel="noreferrer">linkedin.com/in/mark-aldwin-uriarte/</a>
                    </div>
                </div>

                {/* Facebook Card */}
                <div className="contact-card">
                    <div className="icon">👥</div>
                    <div className="info">
                        <h3>Facebook</h3>
                        <a href="https://www.facebook.com/ac.dwinwin" target="_blank" rel="noreferrer">facebook.com/ac.dwinwin</a>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="icon">💻</div>
                    <div className="info">
                        <h3>GitHub</h3>
                        <a href="https://github.com/DwinnySlayer" target="_blank" rel="noreferrer">
                            github.com/DwinnySlayer
                        </a>
                    </div>
                </div>

                <div className="contact-card">
                    <div className="icon">📍</div>
                    <div className="info">
                        <h3>Location</h3>
                        <p>Quezon City, Philippines</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
