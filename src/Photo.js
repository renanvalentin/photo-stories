import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Photo extends Component {
  render() {
    return (
      <div className="Photo">
        <header className="Photo-header">
          <img src={logo} className="Photo-logo" alt="logo" />
          <h1 className="Photo-title">Welcome to React</h1>
        </header>
        <p className="Photo-intro">
          To get started, edit <code>src/Photo.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Photo;
