import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Menu} from 'semantic-ui-react';

class Header extends Component{

    addCheckToken() {
        return fetch('http://localhost:8080/api/checkToken ', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(function(res){ res.json().then(function(rez) {
                if (rez.message == "USER_TOKEN_INVALIDITY") {
                    console.log("Token error : ");
                    console.log(rez.message);
                } else {
                    console.log(rez.message);
                    console.log("Go to add movie, logged in.");
                    hashHistory.push('/addMovie');
                }
            })})

            .catch(function(res){
                console.log("Cannot add, error :");
                console.log(res);
            })
    }

    render() {
        return(
            <div>
                <Menu>
                    <Menu.Menu>
                        <Menu.Item>
                            <Link to="/">
                                &nbsp; WatchMeNow.com</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/allMovies">All Movies</Link>
                        </Menu.Item>
                        <Menu.Item onClick={this.addCheckToken.bind(this)}>
                            Add Movie
                        </Menu.Item>
                    </Menu.Menu>
                    <Menu.Menu position="right">
                        <Menu.Item>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </div>
        );
    }
}

export default connect()(Header);