import React, { Component } from 'react';
import MyNavBar from './myNavBar';
import { Route } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import Web from "./Web";
import CSSBasic from './Web/CSSBasic';
import ReactLifecycleEvent from './Web/ReactLifecycleEvent';
import QueryResult from './QueryResult';
import JavaScriptBasic from './Web/JavaScriptBasic';
import TopSearch from './TopSearch';


import './App.css';

class App extends Component {
  state = {
    pages: ["/web/cssbasic", "/web/react-lifecycle-event", "/web/javascript-basic"],
    query: "",
    pageTitles: [{ name: "CSS Basics", url: "/web/cssbasic", title: "CSS" },
    { name: "React Lifecycle Event", url: "/web/react-lifecycle-event", title: "React" },
    { name: "JavaScript Basics", url: "/web/javascript-basic", title: "JavaScript" }
    ],
    ifTopSearchPresent: false,
  }
  goToRandomPage = () => {
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }
    return (this.state.pages[getRandomInt(this.state.pages.length)]);
  }
  updateQuery = (newQuery) => {
    this.setState({ query: newQuery });
    console.log(this.props);
  }
  showOrHideTopSearch = () => {
    if(this.state.ifTopSearchPresent === false) {
      let topSearch = document.querySelector('.topsearch');
      topSearch.style.top = 0;
      this.setState({ifTopSearchPresent: true});
    } else {
      let topSearch = document.querySelector('.topsearch');
      topSearch.style.top = '-56px';
      this.setState({ifTopSearchPresent: false});
    }
  }
  render() {
    return (

      <div className="App">
        <Route path="/" render={({ history }) => {
          return (<MyNavBar updateQuery={this.updateQuery} myHistory={history} showOrHideTopSearch = {() => this.showOrHideTopSearch()}/>)
        }}>

        </Route>

        <Route path="/" render={({ history }) => {
          return (<TopSearch updateQuery={this.updateQuery} myHistory={history} showOrHideTopSearch = {() => this.showOrHideTopSearch()}/>)
        }}>

        </Route>
        <div className="main-content">

          <Route exact path="/" render={({ history }) => {
            return (<WelcomePage goToRandomPage={() => {
              history.push(this.goToRandomPage());
            }} />);
          }}>


          </Route>

          <Route exact path="/index.html" render={({ history }) => {
            return (<WelcomePage goToRandomPage={() => {
              history.push(this.goToRandomPage());
            }} />);
          }}>

          </Route>

          <Route exact path="/home" render={({ history }) => {
            return (<WelcomePage goToRandomPage={() => {
              history.push(this.goToRandomPage());
            }} />);
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
              pageTitles={this.state.pageTitles} />);
          }}>

          </Route>


          <Route exact path="/web/javascript-basic" render={() => {
            return (<JavaScriptBasic />)
          }}>

          </Route>
        </div>
      </div>
    );
  }
}

export default App;
