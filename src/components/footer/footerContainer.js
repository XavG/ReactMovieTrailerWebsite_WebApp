import React, {Component} from 'react';
import {connect} from 'react-redux';
import FooterView from './footerView';

class Footer extends Component{

    render() {
        return(
            <FooterView/>
        );
    }
}

export default connect()(Footer);