import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Web extends Component {
    render() {
        return <div className="col-lg-10 ml-sm-auto mainContent">
            <div className="container mt-3">
                <div className="row">
                    <div className="col-sm-6 mt-sm-auto mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">CSS</h5>
                                <p className="card-text">CSS Basics</p>
                                <Link to="/web/cssbasic" className="btn btn-outline-success">Read</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 mt-sm-auto mt-3">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">React</h5>
                                <p className="card-text">React lifecycle events</p>
                                <Link to="/web/react-lifecycle-event" className="btn btn-outline-success">Read</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    }
}

export default Web;