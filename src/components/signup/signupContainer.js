import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';
import {hashHistory} from 'react-router';
import {Link} from 'react-router';

class SignUp extends Component {

    loginCheck(){
        event.preventDefault();
        if (!this.inputsCheck()) {
            console.log("Error : Cannot sign up user.");
        } else {
            console.log("Signed up!");
        }

    }

    inputsCheck(){
        if (this.usernameCheck() && this.passwordCheck()) {
            return true;
        } else {
            return false;
        }
    }

    usernameCheck() {
        if (this.refs.username.value != '') {
            return true;
        } else {
            return false;
        }
    }

    passwordCheck() {
        if (this.refs.password.value != '') {
            return true;
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
                            <Form onSubmit={this.loginCheck.bind(this)}>
                                <Form.Field>
                                    <input name="username" placeholder='Username' ref="username"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="password" type="password" placeholder='Password' ref="password"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="confirm" type="password" placeholder='Confirm Password' ref="confirm"/>
                                </Form.Field>
                                <Link to="/login"><Button type='submit'>Cancel</Button></Link>
                                <Button type='submit'>Sign Up</Button>
                            </Form>
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