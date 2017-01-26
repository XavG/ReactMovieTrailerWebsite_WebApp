import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Grid, Segment, Form, Button} from 'semantic-ui-react';
import {Link} from 'react-router';

class Login extends Component {

    loginCheck(){
        event.preventDefault();
        if (!this.inputsCheck()) {
            console.log("Error : Missing username or password");
        } else {
            this.props.users.map((user) => {
               if (this.refs.username.value == user.username) {
                   if (this.refs.password.value == user.password) {
                       console.log('Logged in');
                       hashHistory.push('/');
                   } else {
                       console.log('Error : Wrong password')
                   }
               }
            })
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
                    <Grid.Column className="loginContainer" >
                        <Segment className="center" >
                            <h4>Log-in your account</h4>
                            <Form onSubmit={this.loginCheck.bind(this)}>
                                <Form.Field>
                                    <input name="username" placeholder='Username' ref="username"/>
                                </Form.Field>
                                <Form.Field>
                                    <input name="password" type="password" placeholder='Password' ref="password"/>
                                </Form.Field>
                                <Button type='submit'>Login</Button>
                                <Link to="/signUp"><Button>Sign Up</Button></Link>
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

export default connect(mapStateToProps)(Login);