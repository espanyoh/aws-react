import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import SignUp from './containers/sign_up';
//import FBLogin from './containers/fb_login';
import GGLogin from './containers/google_login';

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2> AWS Showcase</h2>
        </div>
        <div>
          <GGLogin />
        </div>
      </div>
    );
  }
}

export default App;
