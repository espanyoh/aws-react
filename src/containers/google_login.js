import React, { Component} from 'react';
import GoogleLogin from 'react-google-login';
 
const responseGoogle = (response) => {
  console.log(response);
}

export default class GGLogin extends Component {

  render() {
    return (
      <GoogleLogin
        clientId="316873327296-qg3fi0nmeqb4n7r26qnhsqperc9ajg5n.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
  />
    );
  }
}

