import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import './w3.css';
import hiuwave from './hiuwave.png';

class App extends Component {

 
  render() {
   const taglineStyle = {
  marginTop: 64
  }
    return (
      <div className="App w3-black w3-animate-opacity">
        <div className="App-header w3-container">
          <img src={hiuwave} className="" alt="hiuWave" />
          {/*<img src={logo} className="App-logo w3-text-black" alt="logo" />*/}
          <h2>hiuReact</h2>
          <div className="w3-content">
          <input id="text1" className="w3-input w3-center" type="text"/>
          <button className="w3-button w3-block w3-hover-red w3-large">Try It!</button>
          </div>
        </div>
          
        <p className="w3-medium" style={taglineStyle}>
         just another react project
        </p>
      </div>
    );
  }
}

export default App;
