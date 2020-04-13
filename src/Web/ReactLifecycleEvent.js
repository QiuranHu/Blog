import React, { Component } from 'react';

class ReactLifecycleEvent extends Component {
    render() {
        return (
            <div className="col-12 col-lg-10 ml-auto mainContent">
                <div className="container mt-3">
                    <div className="center">
                        <h2>React Lifecycle Event</h2>
                    </div>
                    <p>Lifecycle events are special methods each component can have that allow us
                    to hook into the views when specific conditions happen.
                        
                    </p>
                    <h4>Three important lifecycle events</h4>
                    <p>1. componentDidMount: invoked immediately after the component is inserted
                    into the DOM.
                    </p>
                    <p>2. componentWillUnmount: invoked immediately before the component is removed into
                        the DOM.
                    </p>
                    <p>3. getDerivedStateFromProps: invoked when mounting or re-rendering the component.</p>
                </div>
            </div>
        )
    }
}

export default ReactLifecycleEvent;