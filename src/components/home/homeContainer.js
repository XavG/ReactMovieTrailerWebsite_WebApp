import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import HomeScene from './homeScene';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {selectCategory} from '../../action/selectCategory.js';
import {selectMovie} from '../../action/selectMovie.js';
import {Card, Image, Button, Grid, Segment} from 'semantic-ui-react';

class Home extends Component{

    catList() {
        return (
            <div>
                <div>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[0])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[0].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[1])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[1].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[2])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[2].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[3])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[3].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[4])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[4].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[5])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[5].name}</h5></Button>
                    </Link>
                </div>
                    <br/>
                <div>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[6])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[6].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[7])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[7].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[8])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[8].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[9])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[9].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[10])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[10].name}</h5></Button>
                    </Link>
                    <Link to="/category" onClick={() => this.props.selectCategory(this.props.categories[11])}>
                        <Button className="homeCatBtt" color="blue"><h5>{this.props.categories[11].name}</h5></Button>
                    </Link>
                </div>
            </div>
        )
    }

    topFour() {
        var numLatestMovies = 4;
        var ordered = [];
        for (var i = 0; i < this.props.movies.length; i++) {
            ordered.push(this.props.movies[i]);
        }
        ordered.sort(function (a, b) {
            return b.upload_date - a.upload_date
        });
        ordered = ordered.slice(0, numLatestMovies);
        return ordered;
    }

    topMovies(topFour) {
        return (
            <div>
                <Link to="/movieInfo" onClick={() => this.props.selectMovie(topFour[0])}>
                    <Button className="homeBtt" color="blue">
                        <img src={topFour[0].image} className="imgHomeThumbnail"/>
                        <h5>{topFour[0].title}</h5>
                    </Button>
                </Link>
                <Link to="/movieInfo" onClick={() => this.props.selectMovie(topFour[1])}>
                    <Button className="homeBtt" color="blue">
                        <img src={topFour[1].image} className="imgHomeThumbnail"/>
                        <h5>{topFour[1].title}</h5>
                    </Button>
                </Link>
                <Link to="/movieInfo" onClick={() => this.props.selectMovie(topFour[2])}>
                    <Button className="homeBtt" color="blue">
                        <img src={topFour[2].image} className="imgHomeThumbnail"/>
                        <h5>{topFour[2].title}</h5>
                    </Button>
                </Link>
                <Link to="/movieInfo" onClick={() => this.props.selectMovie(topFour[3])}>
                    <Button className="homeBtt" color="blue">
                        <img src={topFour[3].image} className="imgHomeThumbnail"/>
                        <h5>{topFour[3].title}</h5>
                    </Button>
                </Link>
            </div>
        )
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
                <Link to="/movieInfo" key={movie.id} onClick={() => this.props.selectMovie(movie)}>
                    <Button className="homeMovieBtt" color="blue">
                        <h5>{movie.title}</h5>
                    </Button>
                    <br/>
                </Link>
            );
        });
    }

    render() {
        return(
            <div>
                <Header />

                <HomeScene />

                <div className="center">{this.catList()}</div>

                <h3 className="center">Latest Uploads</h3>
                <div className="center">{this.topMovies(this.topFour())}</div>

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