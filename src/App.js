import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SignUp from './containers/sign_up';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> AWS Showcase</h2>
        </div>
        <div>
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default App;
