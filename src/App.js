import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './w3.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header w3-container w3-blue-grey">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>hiuReact</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
