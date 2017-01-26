import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';
import {Link, hashHistory} from 'react-router';

class Login extends Component {

    loginCheck(){
        if (!this.inputsCheck()) {
            console.log("Error : Missing username or password.");
        } else {
            this.pushLoginToServer();
        }

    }

    pushLoginToServer() {
        return fetch('http://localhost:8080/api/login ', {
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
            .then(function(res){ res.json().then(function(rez) {
                if (rez.message == "USER_NOT_REGISTERED") {
                    console.log("ERROR : ", rez.message);
                } else {
                    localStorage.setItem('webToken', rez.infos.token);
                    console.log("Token : ", localStorage.getItem('webToken'));
                    console.log("You are logged in!");
                    hashHistory.push('/');
                }
            })})
            .catch(function(res){
                console.log("Sign in error : ");
                console.log(res)
            })
    }

    inputsCheck(){
        return this.usernameCheck() && this.passwordCheck();
    }

    usernameCheck() {
        return this.refs.username.value != '';
    }

    passwordCheck() {
        return this.refs.password.value != '';
    }

    loginForm() {
        return(
            <Grid centered>
                <Grid.Row>
                    <Grid.Column className="loginContainer" >
                        <Segment className="center" >
                            <h4>Log-in your account</h4>
                            <Form>
                                <Form.Field>
                                    <input name="username" placeholder='Username' ref="username"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="password" type="password" placeholder='Password' ref="password"/>
                                </Form.Field>
                            </Form>
                            <Button type='submit' onClick={this.loginCheck.bind(this)} >Login</Button>
                            <Link to="/signUp"><Button>Sign Up</Button></Link>
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

export default connect(mapStateToProps)(Login);