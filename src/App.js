import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {Display} from './display.js';
import {NavBar} from './navbar.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1> Hello World </h1>
        <div className="container">
        <NavBar />
        <Display />
        </div>
        </header>
      </div>
    );
  }
}

export default App;
