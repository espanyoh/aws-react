import React, { Component } from 'react';
import { Button, Panel, Grid, Row, Col, form, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {username:'', email:'',password:''};
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }
  render() {
    return (
      <div className="SignUp">

        <Grid >
            <Row className="show-grid">
                <Col xs={6} xsOffset={3}>
                    <Panel header="Sign Up">
                        <form onSubmit={this.onFormSubmit}>
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
    onFormSubmit(event) {
        event.preventDefault();
        console.log('You have clicked signUp\n'+this.state.username+'\n'+this.state.email+'\n'+this.state.password);
        this.setState({});
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
