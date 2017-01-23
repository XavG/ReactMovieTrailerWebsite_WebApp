import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';

class AddMovie extends Component{

    form() {
        return (
            <div>
            <h2>ADD MOVIE</h2>
                Title : <input type="text" name="title"/><br/>
                Genre : <input type="text" name="genre"/><br/>
                Release Date : <input type="text" name="releaseDate"/><br/>
                Director : <input type="text" name="director"/><br/>
                Cast : <input type="text" name="cast"/><br/>
                Image : <input type="text" name="image"/><br/>
                Trailer Link : <input type="text" name="trailerLink"/><br/>
                <input type="submit" value="Add Movie" />
            </div>
            )
    }

    render() {
        return(
            <div>
                <Header />
                {this.form()}
                <Footer />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        categories: state.categories,
        movies: state.movies
    }
}

export default connect(mapStateToProps)(AddMovie);