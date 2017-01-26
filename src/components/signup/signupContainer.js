import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';
import {Link, hashHistory} from 'react-router';

class SignUp extends Component {

    signUpCheck(){
        if (!this.inputsCheck()) {
            console.log("ERROR : Inputs not ok.");
            console.log("ERROR : No username or No Password or Password != Password Confirmation.");
        } else {
            console.log("Sending data to server.");
            this.pushSignUpToServer();
        }

    }

    pushSignUpToServer(){
        return fetch('http://localhost:8080/api/register ', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.refs.username.value,
                password: this.refs.password.value
            })
        })
            .then(function(){
                console.log("Sign up confirmed.");
                hashHistory.push('/login');
            })
            .catch(function(res){
                console.log("ERROR : ", res);
            })
    }

    inputsCheck(){
        return this.usernameCheck() && this.passwordCheck()
    }

    usernameCheck() {
        return this.refs.username.value != ''
    }

    passwordCheck() {
        if (this.refs.password.value != '') {
            return this.refs.password.value == this.refs.confirm.value
        } else {
            return false;
        }
    }

    loginForm() {
        return(
            <Grid centered>
                <Grid.Row>
                    <Grid.Column className="loginContainer">
                        <Segment className="center">
                            <h4>Sign up to WachMeNow.com</h4>
                            <Form>
                                <Form.Field>
                                    <input name="username" placeholder='Username' ref="username"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="password" type="password" placeholder='Password' ref="password"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="confirm" type="password" placeholder='Confirm Password' ref="confirm"/>
                                </Form.Field>
                            </Form>
                            <Link to="/login"><Button type='submit'>Cancel</Button></Link>
                            <Button type='submit' onClick={this.signUpCheck.bind(this)}>Sign Up</Button>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }

    render() {
        return (

            <div>
                <Header />
                <br/>
                {this.loginForm()}
                <br/>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps)(SignUp);