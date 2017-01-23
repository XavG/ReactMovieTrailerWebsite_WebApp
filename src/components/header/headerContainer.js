import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {Link} from 'react-router'

class Header extends Component{

    render() {
        return(
            <table>
                <tbody>
                <tr>
                    <th>
                        <Link to="/">
                            <button className="button" style={{width: 100, height: 100}}>Home</button>
                        </Link>
                    </th>
                    <th>
                        <h1> WatchMeNow.com </h1>
                        <h4>Free Movie Trailers</h4>
                    </th>
                    <th>
                        <Link to="/login">
                            <button className="button" style={{width: 100, height: 100}}>Log in</button>
                        </Link>
                    </th>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default connect()(Header);