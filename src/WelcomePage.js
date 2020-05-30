import React, { Component } from 'react';
import webImage from "./images/web.png";
import toolImage from './images/tool.png';
import webHero from './images/web-hero.jpg';
import { Link } from "react-router-dom";
import './WelcomePage.css';
class WelcomePage extends Component {
    render() {
        return (
            <div>

                <div className="welcome-banner">
                    <div className="welcome-banner-item welcome-banner-web">
                        <img src={webImage} alt="web" className="welcome-web"></img>
                        <h3>Web fundamentals</h3>
                        <p>This blog covers web fundamentals, including HTML, CSS and JavaScript.</p>
                        <Link to="/web" className="welcome-web-button" alt="web">Get Started</Link>
                        <div className="clearfix">
                            
                        </div>
                    </div>

                    <div className="welcome-banner-item welcome-banner-tool">
                        <img src={toolImage} alt="tool"></img>
                        <h3>Web Tools</h3>
                        <p>This blog will cover React and React friends, including React Router and full stack tools.</p>
                        <Link to="/" className="welcome-web-button welcome-web-tool-button" alt="tool">Soon coming</Link>
                        <div className="clearfix">
                            
                        </div>
                    </div>
                </div>
                <div className="welcome-hero">
                    <div className="welcome-hero-imgcontainer">
                        <img src={webHero} alt="hero" className="welcome-hero-img"></img>
                    </div>
                    <div className="welcome-hero-content">
                        <p className="welcome-hero-content-text">Welcome to my blog! Click the following button, and read a random article.</p>
                            <button type="button" className="welcome-hero-button"
                                onClick={() => {
                                    this.props.goToRandomPage();
                            }}>Try Your Luck!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default WelcomePage;