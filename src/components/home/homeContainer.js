import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import HomeScene from './homeScene';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {selectCategory} from '../../action/selectCategory.js';
import {selectMovie} from '../../action/selectMovie.js';
import {Card, Image} from 'semantic-ui-react';

class Home extends Component{

    categoryList() {
        return this.props.categories.map((category) => {
            return (
            <Link to="/category" key={category.name}>
                <Card onClick={() => this.props.selectCategory(category)} className="ui centered card">
                    <Card.Description>
                        {category.name}
                    </Card.Description>
                </Card>
            </Link>
            );
        });
    }

    latestMovies() {
        var numLatestMovies = 4;
        var ordered = [];
        for (var i = 0; i < this.props.movies.length; i++) {
            ordered.push(this.props.movies[i]);
        }
        ordered.sort(function (a, b) {
            return b.upload_date - a.upload_date
        });
        var topFour = ordered.slice(0, numLatestMovies);
        return topFour.map((movie) => {
            return (
            <Link to="/movieInfo" key={movie.id}>
                <Card onClick={() => this.props.selectMovie(movie)} className="ui centered card">
                    <Card.Description>
                        {movie.title} | Upload date : {movie.upload_date}
                    </Card.Description>
                </Card>
            </Link>
            );
        });
    }

    movieList(){
        var alphaOrder = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            alphaOrder.push(this.props.movies[i]);
        }
        alphaOrder.sort(function(a, b) {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;});
        return alphaOrder.map((movie) => {
            return(
                <Link to="/movieInfo" key={movie.id}>
                    <Card onClick={() => this.props.selectMovie(movie)} className="ui centered card">
                        <Card.Description>
                            {movie.title}
                        </Card.Description>
                    </Card>
                </Link>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />
                <HomeScene name={"Home"}/>

                <h3 className="center">Categories</h3>
                <div className="center">{this.categoryList()}</div>

                <h3 className="center">Latest Movies</h3>
                <div className="center">{this.latestMovies()}</div>

                <h3 className="center">All Movies</h3>
                <div className="center">{this.movieList()}</div>

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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectCategory: selectCategory, selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);