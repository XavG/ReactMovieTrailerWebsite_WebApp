import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import HomeScene from './homeScene';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {selectCategory} from '../../action/selectCategory.js';
import {selectMovie} from '../../action/selectMovie.js';

class Home extends Component{

    categoryList() {
        return this.props.categories.map((category) => {
            return(
                <li key={category.name} onClick={() => this.props.selectCategory(category)}>
                    <Link to="/category">{category.name}</Link>
                </li>
            );
        });
    }

    latestMovies() {
        var numLatestMovies = 4;
        var ordered = [];
        for (var i=0;  i < this.props.movies.length;i++) {
            ordered.push(this.props.movies[i]);
        }
        ordered.sort(function(a, b) {return b.upload_date - a.upload_date});
        var topFour = ordered.slice(0,numLatestMovies);
        return topFour.map((movie) => {
            return(
                <li key={movie.id} onClick={() => this.props.selectMovie(movie)}>
                    <Link to="/movieInfo">{movie.title} > {movie.upload_date}</Link>
                </li>
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
                <li key={movie.id} onClick={() => this.props.selectMovie(movie)}>
                    <Link to="/movieInfo">{movie.title}</Link>
                </li>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />
                <HomeScene name={"HOME"}/>
                <h2>GENRES</h2>
                <div>{this.categoryList()}</div>
                <h2>LATEST MOVIES</h2>
                <div>{this.latestMovies()}</div>
                <Link to="/allMovies"><h2>ALL MOVIES</h2></Link>
                <div>{this.movieList()}</div>
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