import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom";
import web from '../images/web.svg';
import cancel from '../images/cancel.svg';

class SideNav extends Component {
    goTo(url) {
        this.props.myHistory.push(url);
        this.props.showOrHideSideNav();
    }
    render() {
        return (
            <div className="sideNavContainer">
                <nav className="sideNav">
                    <img src={cancel} alt="close" className="closeSideNavIcon" onClick={() => {this.props.showOrHideSideNav()}}></img>
                    <ul className="sideNavList">
                        <li className="sideNavListItem">
                            <img src={web} alt="web" className="sideNavListItemIcon" onClick={() => this.goTo("/web")}></img>
                            <Link to="/web" className="sideNavLink" onClick = {() => {this.props.showOrHideSideNav()}}>web</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default SideNav;