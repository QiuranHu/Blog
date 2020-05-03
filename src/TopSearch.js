import React from 'react';
import {Component} from 'react';

class TopSearch extends Component {
    render() {
        <div className="topsearch">
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
        </div>
    }
}