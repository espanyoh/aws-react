import React, { Component} from 'react';
import FacebookLogin from 'react-facebook-login';

const responseFacebook = (response) => {
  console.log('[responseFacebook]response:',response);
};

export default class FBLogin extends Component {

  render() {
    return (
      <FacebookLogin
        appId="207309706437908"
        autoLoad={false}
        fields="name,email,picture"
        callback={responseFacebook} 
          icon="fa-facebook"/>
    );
  }
}

