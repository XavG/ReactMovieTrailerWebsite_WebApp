import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import NotFoundView from  './404View.js';

class NotFound extends Component{

    render() {
        return(
            <div>
                <Header />

                <NotFoundView />

                <Footer />
            </div>
        );
    }

}


export default connect()(NotFound);