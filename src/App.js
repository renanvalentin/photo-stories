import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { PhotoStoriesView } from "./photos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={PhotoStoriesView} />
        </div>
      </Router>
    );
  }
}

export default App;
