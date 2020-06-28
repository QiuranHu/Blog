import React from 'react';
import {Component} from 'react';
import search from '../images/search.svg';
import serializeForm from 'form-serialize';
import cancel from '../images/cancel.svg';


class TopSearch extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        const values = serializeForm(e.target, { hash: true });
        this.props.updateQuery(values.search);
        this.props.myHistory.push('/queryresult')
    }
    render() {
        return(
        <div className="topsearch">
            <form className="topsearch-formcontainer" onSubmit={this.handleSubmit}>
                <div className="navbar-input-box">
                    <input className="navbar-input" placeholder="Search" name="search"></input>
                </div>

                <button className="navbar-input-submit">
                    <img src={search} alt="search" className="navbar-input-submit-icon"
                        type="submit"
                    >
                    </img>
                </button>
                <img src={cancel} alt="close" className="topsearch-cancel" onClick={this.props.showOrHideTopSearch}></img>
            </form>
        </div>
        )
    }
}

export default TopSearch;