import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class QueryResult extends Component {
    render() {
        let queryLowerCase = "";
        if(this.props.query){
            queryLowerCase = this.props.query.toLowerCase();
        } else {
            return (
                <div className="col-lg-10 ml-sm-auto mainContent">
                    <div className="text-center col-sm-6 mx-auto">
                        <div className="alert alert-primary mt-5"  role="alert">
                        <h4 className="alert-heading">You did not search anything!</h4>
                        <hr></hr>
                        <p className="mb-0">Please try again.</p>
                        </div> 
                    </div>
                    
                </div>
                
            )
        }
        const pages = this.props.pageTitles.filter((page) => (page.name.toLowerCase().includes(queryLowerCase)));
        if(pages.length === 0){
            return (
                <div className="col-lg-10 ml-sm-auto mainContent">
                    <div className="text-center col-sm-6 mx-auto">
                        <div className="alert alert-primary mt-5"  role="alert">
                        <h4 className="alert-heading">Found nothing!</h4>
                        <hr></hr>
                        <p className="mb-0">Please try again.</p>
                        </div> 
                    </div>
                    
                </div>
            )
        }
        return (
            <div className="col-lg-10 ml-sm-auto mainContent">
                <div className="container mt-3">
                    <p>Here is the search results:</p>
                    <div className="row mb-3">

                        {pages.map((page) => (
                            <div className="col-sm-6  mt-3" key={page.url}>
                                <div className="card" >
                                    <div className="card-body">
                                        <h5 className="card-title">{page.title}</h5>
                                        <p className="card-text">{page.name}</p>
                                        <Link to={page.url} className="btn btn-outline-success">Read</Link>
                                    </div>
                                </div>
                            </div>))}

                    </div>
                </div>
            </div>
        )
    }
}
export default QueryResult;