import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QueryResult extends Component {
    render() {
        let queryLowerCase = "";
        if(this.props.query){
            queryLowerCase = this.props.query.toLowerCase();
        } else {
            return (
                <div className="queryresult-found-nothing">
                    <div className="queryresult-fount-nothing-text-containter">
                        <div className="queryresult-found-nothing-sorry">Sorry</div>
                        <div>You did not search anything!</div>
                    </div>
                </div>
                
            )
        }
        const pages = this.props.pageTitles.filter((page) => (page.name.toLowerCase().includes(queryLowerCase)));
        if(pages.length === 0){
            return (
                <div className="queryresult-found-nothing">
                    <div className="queryresult-fount-nothing-text-containter">
                        <div className="queryresult-found-nothing-sorry">Sorry</div>
                        <div>0 results</div>
                    </div>
                </div>
            )
        }
        return (
            <div className="cards">
                {pages.map((page) => (
                    <div key={page.url} className="card">
                        <div className="card-container">
                            <h5 className="card-class">{page.title}</h5>
                            <div className="card-content">
                                <p className="card-title">{page.name}</p>
                                <Link className="button-green" to={page.url}>Read</Link>
                            </div>
                        </div>
                    </div>))}
            </div>
        )
    }
}
export default QueryResult;