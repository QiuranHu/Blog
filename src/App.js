import React, { Component } from 'react';
import MyNavBar from './myNavBar';
import MySideBar from './MySideBar';
import {Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomePage from './WelcomePage';
import Web from "./Web";
import CSSBasic from './Web/CSSBasic';
import ReactLifecycleEvent from './Web/ReactLifecycleEvent';
import QueryResult from './QueryResult';


import './App.css';

class App extends Component {
  state = {
    pages: ["/web/cssbasic", "/web/react-lifecycle-event"],
    query: "",
    pageTitles: [{name: "CSS Basic", url:"/web/cssbasic", title:"CSS"}, 
    {name:"React Lifecycle Event", url: "/web/react-lifecycle-event", title:"React"}]

  }
  goToRandomPage = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    return (this.state.pages[getRandomInt(this.state.pages.length)]);
  }
  updateQuery = (newQuery) => {
    this.setState({query: newQuery});
    console.log(this.props);
  }
  render() {
    return (
      
      <div className="App">
        <Route path="/" render={({history}) => {
          return (<MyNavBar updateQuery={this.updateQuery} myHistory={history} />)
        }}>
        
        </Route>
        <div className="container">
          <div className="row ">
          <nav className={`col-lg-2 col-0 d-none d-lg-block  mysidebar bg-light`}>
            <MySideBar navAttribute="flex-column" />
            </nav>
          </div>
        </div>
        
        <Route exact path="/" render={({history}) => {
          return (<WelcomePage goToRandomPage={() => {
            history.push(this.goToRandomPage());
          }}/>);
        }}>

        </Route>
        <Route exact path="/home" render={({history}) => {
          return (<WelcomePage goToRandomPage={() => {
            history.push(this.goToRandomPage());
          }}/>);
        }}>

        </Route>

        <Route exact path="/web" render={() => {
          return (<Web />);
        }}>
        </Route>

        <Route exact path="/web/cssbasic" render={() => {
          return (<CSSBasic />);
        }}>

        </Route>

        
        <Route exact path="/web/react-lifecycle-event" render={() => {
          return (<ReactLifecycleEvent />);
        }}>

        </Route>
        <Route exact path="/queryresult" render={() => {
          return (<QueryResult query={this.state.query} 
            pages={this.state.pages} 
            pageTitles={this.state.pageTitles}/>);
        }}>

        </Route>
      </div>
    );
  }
}

export default App;
