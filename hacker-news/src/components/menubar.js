import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuBar extends Component {
    openToggle() {
        console.log('yesss')
        document.querySelector("#nav-link").classList.toggle("display-nav");
    }
    render() {
        return (
            <nav className="navbar">
                <span className="navbar-toggle" id="nav-btn" onClick={this.openToggle}>
                    <div>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </span>
                <div className="logo">
                    <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
                </div>

                <ul className="main-nav" id="nav-link">
                    <li>
                        <a href="#services" className="nav-links works">How it Works</a>
                    </li>
                    <li className="login">
                        <a href="./login.html" className="nav-links login-link">LOGIN</a>
                    </li>
                    <li className="sign-up">
                        <a href="./signup.html" className="nav-links sign-up-link">SIGN UP</a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default MenuBar;