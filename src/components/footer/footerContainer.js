import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Footer extends Component{

    render() {
        return(
            <div>
                <hr/>
                <a>WatchMeNow.com ™</a>
            </div>
        );
    }
}

export default connect()(Footer);