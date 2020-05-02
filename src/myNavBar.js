import React, { Component } from 'react';
import { Link } from "react-router-dom";
import serializeForm from 'form-serialize';
import home from './home.svg';
import kickstart from './kickstart.svg';
import web from './web.svg';
import search from './search.svg';
import dehaze from './dehaze.svg';

class MyNavBar extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        this.props.updateQuery(values.search);
        this.props.myHistory.push('/queryresult')
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-logo" >
                        <span className="navbar-icon">
                            <img src={dehaze} alt="more information" id="navbar-more">
                            </img>
                        </span>
                        <Link to="/" className="navbar-logo-text">My blog</Link>
                    </div>

                    <form className="navbar-input-container" onSubmit={this.handleSubmit}>
                        <div className="navbar-input-box">
                            <input className="navbar-input" placeholder="Search" name="search"></input>
                        </div>

                        <button className="navbar-input-submit">
                            <img src={search} alt="search" className="navbar-input-submit-icon"
                            type="submit"
                            >
                            </img>
                        </button>
                    </form>

                    <div className="navbar-icons-container">
                        <div className="navbar-icons">
                            <span className="navbar-icon" id="navbar-icon-search">
                                <img src={search} alt="search">
                                </img>
                            </span>
                            <Link className="navbar-icon navbar-icon-hide" to="/home">
                                <img src={home} alt="home" >
                                </img>
                            </Link>
                            <Link className="navbar-icon navbar-icon-hide" to="/kickstart">
                                <img src={kickstart} alt="kick start" >
                                </img>
                            </Link>
                            <Link className="navbar-icon navbar-icon-hide" to="/web">
                                <img src={web} alt="web" >
                                </img>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        
        )
    }
}

export default MyNavBar;