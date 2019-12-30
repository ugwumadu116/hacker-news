import React, { Component } from 'react';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MenuBar extends Component {
    openToggle() {
        document.querySelector("#nav-link").classList.toggle("display-nav");
    }
    render() {
        return (
            <nav className="navbar">
                <div className="logo">
                    <img src="https://news.ycombinator.com/y18.gif" alt="logo" />
                </div>

                <ul className="main-nav" id="nav-link">
                    <li>
                        <a href="#em" className=" brand">Hacker News</a>
                    </li>
                    <li>
                        <a href="#em">new</a>
                    </li>
                    <li>
                        <a href="#em">past</a>
                    </li>
                    <li>
                        <a href="#em">comments</a>
                    </li>
                    <li>
                        <a href="#em">ask</a>
                    </li>
                    <li>
                        <a href="#em">show</a>
                    </li>
                    <li>
                        <a href="#em">jobs</a>
                    </li>
                    <li>
                        <a href="#em">submit</a>
                    </li>
                    <li >
                        <a href="em" className=" brand">login</a>
                    </li>
                </ul>
                <div className="menu" onClick={this.openToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
            </nav>
        );
    }
}

export default MenuBar;