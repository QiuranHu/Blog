import React, { Component } from 'react';

class ReactLifecycleEvent extends Component {
    render() {
        
        return (
            <div className="col-12 col-lg-10 ml-auto mainContent">
                <div className="container mt-3">
                    <div className="center">
                       <p>This is an article about React.</p>
                    </div>
                    <div className="article-content">
                    <h2>React Lifecycle Event</h2>
                    <p>Lifecycle events are special methods each component can have that allow us
                    to hook into the views when specific conditions happen. To use one of these, you'd just
                    create a method in your component with the name and React will call it.
                        
                    </p>
                    <h4>Three important lifecycle events</h4>
                    <p>1. <span className="badge badge-primary">componentDidMount</span>: invoked immediately after the component is inserted
                    into the DOM. <span className="font-italic text-success">We can put Ajax request here. </span>
                    </p>
                    <p>2. <span className="badge badge-primary">componentWillUnmount</span>: invoked immediately before the component is removed into
                        the DOM.
                    </p>
                    <p>3. <span className="badge badge-primary">getDerivedStateFromProps</span>: invoked when mounting or re-rendering the component, invoked 
                    after a component is instantiated as well as it receives brand new props.</p>
                    <h4>Adding to the DOM</h4>
                    <p>The following lifecycle events will be called in order when 
                        a component is being added to the DOM: <span className="badge badge-pill badge-danger">constructor()</span>, 
                        <span className="badge badge-pill badge-danger">getDerivedStateFromProps() </span>, 
                        <span className="badge badge-pill badge-danger">render() </span>, 
                        <span className="badge badge-pill badge-danger">componentDidMount() </span>.
                    </p>
                    <h4>Re-rendering</h4>
                    <p>The following lifecycle events will be called in order when re-rendering: 
                    <span className="badge badge-pill badge-success">getDerivedStateFromProps() </span>, 
                    <span className="badge badge-pill badge-success">shouldComponetUpdate() </span>, 
                    <span className="badge badge-pill badge-success">render() </span>, 
                    <span className="badge badge-pill badge-success">getSnapshotBeforeUpdate() </span>, 
                    <span className="badge badge-pill badge-success">componentDidUpdate() </span>.
                    </p>
                    <h4>Removing from the DOM</h4>
                    <p>This lifecycle event is called when a component is being removed from the DOM: 
                    <span className="badge badge-pill badge-warning">componentWillUnmount() </span>.
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReactLifecycleEvent;