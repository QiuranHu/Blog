import React, { Component } from 'react';
import home from './home.svg';
import kickstart from './kickstart.svg';
import network from './network.svg';
import os from './os.svg';
import web from './web.svg';
import { Link } from 'react-router-dom';

class MySideBar extends Component {
  render() {
    return (

      <div >
        <ul className={`nav ${this.props.navAttribute}`}>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/home">
              <div
              data-toggle={this.props.isToggler === 'true' && 'collapse'}
              data-target={this.props.isToggler === 'true' && "#navbarSupportedContent"}
              aria-controls={this.props.isToggler === 'true' && "navbar Support Content"}
              aria-expanded={this.props.isToggler === 'true' && "false"}
              aria-label={this.props.isToggler === 'true' && "Toggle navigation"}>
              <img src={home}></img>
              <span className="pl-2">Home</span>
              </div>
            </Link>
          </li>

          <li className="nav-item ">
            <Link className="nav-link text-dark" to="/kickstart">
            <div
              data-toggle={this.props.isToggler === 'true' && 'collapse'}
              data-target={this.props.isToggler === 'true' && "#navbarSupportedContent"}
              aria-controls={this.props.isToggler === 'true' && "navbar Support Content"}
              aria-expanded={this.props.isToggler === 'true' && "false"}
              aria-label={this.props.isToggler === 'true' && "Toggle navigation"}>
              <img src={kickstart}></img>
              <span className="pl-2">Kickstart</span>
              </div>
            </Link>
          </li>
          <li className="nav-item ">
            <Link className="nav-link text-dark" to="/os">
              <div
              data-toggle={this.props.isToggler === 'true' && 'collapse'}
              data-target={this.props.isToggler === 'true' && "#navbarSupportedContent"}
              aria-controls={this.props.isToggler === 'true' && "navbar Support Content"}
              aria-expanded={this.props.isToggler === 'true' && "false"}
              aria-label={this.props.isToggler === 'true' && "Toggle navigation"}>
              <img src={os}></img>
              <span className="pl-2">OS</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/network">
              <div
              data-toggle={this.props.isToggler === 'true' && 'collapse'}
              data-target={this.props.isToggler === 'true' && "#navbarSupportedContent"}
              aria-controls={this.props.isToggler === 'true' && "navbar Support Content"}
              aria-expanded={this.props.isToggler === 'true' && "false"}
              aria-label={this.props.isToggler === 'true' && "Toggle navigation"}>
              <img src={network}></img>
              <span className="pl-2">Network</span>
              </div>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-dark" to="/web">
              <div
              data-toggle={this.props.isToggler === 'true' && 'collapse'}
              data-target={this.props.isToggler === 'true' && "#navbarSupportedContent"}
              aria-controls={this.props.isToggler === 'true' && "navbar Support Content"}
              aria-expanded={this.props.isToggler === 'true' && "false"}
              aria-label={this.props.isToggler === 'true' && "Toggle navigation"}>
              <img src={web}></img>
              <span className="pl-2">Web</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default MySideBar;