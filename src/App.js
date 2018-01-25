import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PhotoStoriesView } from "./photos";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
          </div>

          <Route path="/" component={PhotoStoriesView} />
        </div>
      </Router>
    );
  }
}

export default App;
