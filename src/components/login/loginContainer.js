import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';

class Login extends Component {

    render() {
        return (

            <div>
                <Header />
                <h2>LOGIN</h2>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps() {
    return {}
}

export default connect(mapStateToProps)(Login);