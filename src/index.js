import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Router, Route, hashHistory} from 'react-router';
import Home from '../src/components/home/homeContainer.js';
import Category from '../src/components/category/categoryContainer.js';
import MovieCard from '../src/components/movieCard/movieCardContainer.js';
import Login from '../src/components/login/loginContainer.js';
import AddMovie from '../src/components/addMovie/addMovieContainer.js';
import AllMovies from '../src/components/allMovies/allMoviesContainer.js';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Router history={hashHistory}>
            <Route path="/" component={Home} />
            <Route path="/category" component={Category} />
            <Route path="/movieInfo" component={MovieCard} />
            <Route path="/login" component={Login} />
            <Route path="/addMovie" component={AddMovie} />
            <Route path="/allMovies" component={AllMovies} />
        </Router>
    </Provider>
    , document.getElementById('root'));
