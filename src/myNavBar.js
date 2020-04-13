import React, { Component } from 'react';
import { Link } from "react-router-dom";
import MySideBar from './MySideBar';
import serializeForm from 'form-serialize';


class MyNavBar extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        this.props.updateQuery(values.search);
        this.props.myHistory.push('/queryresult')
    }
    render() {
        return (
            <nav className="navbar navbar-expand-lg p-lg-3 navbar-light bg-white myNavbar w-100 border-bottom shadow-sm">
                <Link className="navbar-brand" to="/">
                    My blog
                </Link>
                <button className="navbar-toggler" type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbar Support Content"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <div>
                        <MySideBar navAttribute="d-lg-none flex-column" isToggler="true" />

                    </div>
                    <form className="form-inline  my-2 my-lg-0 ml-lg-auto search" onSubmit={this.handleSubmit}>
                        <input className="form-control mr-sm-2" type="search"
                            placeholder="Search"
                            aria-label="Search"
                            name="search"
                        ></input>
                        <button className="btn btn-outline-success my-2 my-sm-0 d-none d-lg-block" type="submit"
                            > Search </button>
                        <button className="btn btn-outline-success my-2 my-sm-0 d-lg-none" type="submit" data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbar Support Content"
                            aria-expanded="false"
                            aria-label="Toggle navigation"> Search </button>
                        
                    </form>

                </div>


            </nav>
        )
    }
}

export default MyNavBar;