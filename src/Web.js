import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Web extends Component {
    render() {
        return <div className="cards">
                <div className="card-container">
                    <div className="card-class">
                        CSS
                    </div>
                    <div className="card-content">
                        <p className="card-title">CSS Basics</p>
                        <Link to="/web/cssbasic" className="button-green">Read</Link>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-class">
                    React
                    </div>
                    <div className="card-content">
                        <p className="card-title">React lifecycle events</p>
                        <Link to="/web/react-lifecycle-event" className="button-green">Read</Link>
                    </div>
                </div>

                <div className="card-container">
                    <div className="card-class">
                    JavaScript
                    </div>
                    <div className="card-content">
                        <p className="card-title">JavaScript Basics</p>
                        <Link to="/web/javascript-basic" className="button-green">Read</Link>
                    </div>
                </div>

            </div>
    }
}

export default Web;