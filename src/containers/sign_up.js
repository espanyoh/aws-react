import React, { Component } from 'react';
import { Button, Panel, Grid, Row, Col, form, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

import {Config, CognitoIdentityCredentials} from "aws-sdk";
import {
  CognitoUserPool,
  CognitoUserAttribute,
  CognitoUser
} from "amazon-cognito-identity-js";
import appConfig from "../config";

Config.region = appConfig.region;
Config.credentials = new CognitoIdentityCredentials({
  IdentityPoolId: appConfig.IdentityPoolId
});
const userPool = new CognitoUserPool({
  UserPoolId: appConfig.UserPoolId,
  ClientId: appConfig.ClientId,
});


class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {username:'', email:'',password:'',verifyCode:''};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onSignUpFormSubmit = this.onSignUpFormSubmit.bind(this);

        this.onVerifyCodeChange = this.onVerifyCodeChange.bind(this);
        this.onVerifyFormSubmit = this.onVerifyFormSubmit.bind(this);
    }
  render() {
    return (
      <div className="SignUp">

        <Grid >
            <Row className="show-grid">
                <Col xs={6} xsOffset={3}>
                    <Panel header="Sign Up">
                        <form onSubmit={this.onSignUpFormSubmit}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Username"
                            placeholder="Enter text"
                            onBlur={ this.onUsernameChange }
                            />
                            <FieldGroup
                            id="formControlsEmail"
                            type="email"
                            label="Email address"
                            placeholder="Enter email"
                            onBlur={ this.onEmailChange }
                            />
                            <FieldGroup
                            id="formControlsPassword"
                            label="Password"
                            type="password"
                            onBlur={ this.onPasswordChange }
                            />
                            <Button type="submit" bsStyle="primary" >Sign Up</Button>
                        </form>
                    </Panel>  
                </Col>
            </Row>
             <Row className="show-grid">
                <Col xs={6} xsOffset={3}>
                    <Panel header="Verify">
                        <form onSubmit={this.onVerifyFormSubmit}>
                            <FieldGroup
                            id="formControlsText"
                            type="text"
                            label="Verification Code"
                            placeholder="Enter Verification Code"
                            onBlur={ this.onVerifyCodeChange }
                            />
                            <Button type="submit" bsStyle="primary" >Verify</Button>
                        </form>
                    </Panel>  
                </Col>
            </Row>
        </Grid>        
      </div>
    );
  }

    onUsernameChange(event){
        console.log(event.target.value);
        this.setState( {username : event.target.value} );
    }
    onEmailChange(event){
        console.log(event.target.value);
        this.setState( {email : event.target.value} );
    }
    onPasswordChange(event){
        console.log(event.target.value);
        this.setState( {password : event.target.value} );

    }
    onVerifyCodeChange(event){
        console.log(event.target.value);
        this.setState( {verifyCode : event.target.value} );
    }
    onSignUpFormSubmit(event) {
        event.preventDefault();
        console.log('---You have clicked signUp\n'+this.state.username+'\n'+this.state.email+'\n'+this.state.password);
        const email = this.state.email.trim();
        const password = this.state.password.trim();
        const username = this.state.username.trim();
        const attributeList = [
        new CognitoUserAttribute({
            Name: 'email',
            Value: email,
            })
        ];
        userPool.signUp(username, password, attributeList, null, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log('user name is ' + result.user.getUsername());
        console.log('call result: ' + result);
        });

        this.setState({});
    }
    onVerifyFormSubmit(event){
        event.preventDefault();
        const verifyCode = this.state.verifyCode.trim();
        const username = this.state.username.trim();
        console.log('---You have clicked Verify \n-------\n'+username+'\n'+verifyCode+'\n--------');

        var userData = {
            Username : username,
            Pool : userPool
        };

        var cognitoUser = new CognitoUser(userData);
        cognitoUser.confirmRegistration(verifyCode, true, function(err, result) {
            if (err) {
                alert(err);
                return;
            }
            console.log('call result: ' + result);
        });        

    }
  
}
function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

export default SignUp;
