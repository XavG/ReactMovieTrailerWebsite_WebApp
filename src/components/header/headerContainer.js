import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import NavigationBar from './headerView';

class Header extends Component{

    render() {
        return(
            <div>
                <NavigationBar />
            </div>
        );
    }
}

export default connect()(Header);