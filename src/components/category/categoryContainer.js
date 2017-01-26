import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {bindActionCreators} from 'redux';
import {Link} from 'react-router';
import {selectMovie} from '../../action/selectMovie.js';
import {Button} from 'semantic-ui-react';

class Category extends Component {

    getCatMovies(){
        var catMovies = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            if (this.props.movies[i].genre.indexOf(this.props.activeCategory.name) > -1) {
                catMovies.push(this.props.movies[i]);
            }
        }
        catMovies.sort(function(a, b) {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;});
        return catMovies.map((movie) => {
            return(
                <Link to="/movieInfo" key={movie.id} onClick={() => this.props.selectMovie(movie)}>
                    <Button className="listMovieBtt" color="blue">
                        <h5>{movie.title}</h5>
                    </Button>
                    <br/>
                </Link>
            );
        });
    }

    render() {
        if (!this.props.activeCategory){
            return(<div>
                <Header />
                <h4>/!\ No category selected /!\</h4>
                <Footer />
            </div>)
        }
        return (

            <div>
                <Header />
                    <div className="center">
                        <br/>
                        <h2>Category : {this.props.activeCategory.name}</h2>
                        <br/>
                        <div>{this.getCatMovies()}</div>
                    </div>
                <Footer />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        activeCategory: state.activeCategory,
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);