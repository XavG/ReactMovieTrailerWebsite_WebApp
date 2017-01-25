import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {selectCategory} from '../../action/selectCategory.js';
import {selectMovie} from '../../action/selectMovie.js';
import {Card} from 'semantic-ui-react';

class AllMovies extends Component{

    constructor() {
        super();
        this.state = {
            query: '',
            queryFilter : 'title',
            queryPlaceholder : 'Search...'
        }
    }

    movieList(){
        var dropDownFilter = this.state.queryFilter;
        var filteredMovies = this.props.movies.filter(
            (movie) => {
                if (dropDownFilter == 'title') {
                    return movie.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !== -1;
                } else if (dropDownFilter == 'releaseDate') {
                    return movie.release_date.toString().startsWith(this.state.query);
                } else if (dropDownFilter == 'uploadDate') {
                    return movie.upload_date.toString().startsWith(this.state.query);
                } else if (dropDownFilter == 'uploader') {
                    return movie.uploader.toLowerCase().startsWith(this.state.query.toLocaleLowerCase());
                } else if (dropDownFilter == 'director') {
                    return movie.director.toLowerCase().startsWith(this.state.query.toLocaleLowerCase());
                }
            }
        );
        var alphaOrder = [];
        for (var i=0;  i < filteredMovies.length;i++) {
            alphaOrder.push(filteredMovies[i]);
        }
        alphaOrder.sort(function(a, b) {
            if(a.title < b.title) return -1;
            if(a.title > b.title) return 1;
            return 0;});
        return alphaOrder.map((movie) => {
            return(
                <Link to="/movieInfo" key={movie.id}>
                    <Card onClick={() => this.props.selectMovie(movie)}>
                        <Card.Description>
                            {movie.title}
                        </Card.Description>
                    </Card>
                </Link>
            );
        });
    }

    updateQuery(event) {
        this.setState({query : event.target.value});
    }

    updateQueryFilter(event) {
        this.setState({queryFilter : event.target.value});
        if (event.target.value == 'title') {
            this.setState({queryPlaceholder : "Search by Title..."});
        } else if (event.target.value == 'releaseDate') {
            this.setState({queryPlaceholder : "YYYYMMDD"});
        } else if (event.target.value == 'uploadDate') {
            this.setState({queryPlaceholder : "YYYYMMDD"});
        } else if (event.target.value == 'uploader') {
            this.setState({queryPlaceholder : "Search by Uploader..."});
        } else if (event.target.value == 'director') {
            this.setState({queryPlaceholder : "Search by Director..."});
        }
    }

    render() {
        return(
            <div>
                <Header />

                <h2>All Movies</h2>

                <input type="text"
                       value={this.state.query}
                       onChange={this.updateQuery.bind(this)}
                       placeholder={this.state.queryPlaceholder}/>

                <select onChange={this.updateQueryFilter.bind(this)}>
                    <option value="title">Title</option>
                    <option value="releaseDate">Release Date</option>
                    <option value="director">Director</option>
                    <option value="uploadDate">Upload Date</option>
                    <option value="uploader">Uploader</option>
                </select>

                <div>{this.movieList()}</div>

                <Footer />
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        movies: state.movies
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectMovie: selectMovie}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMovies);