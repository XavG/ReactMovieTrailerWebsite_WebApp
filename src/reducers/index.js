import {combineReducers} from 'redux';
import Categories from './reducer-categories';
import Movies from './reducer-movies';
import ActiveMovie from './reducer-active-movie';
import ActiveCategory from './reducer-active-category';
import Users from './reducer-users';

const allReducers = combineReducers({
    categories : Categories,
    movies : Movies,
    activeMovie : ActiveMovie,
    activeCategory : ActiveCategory,
    users : Users
});

export default allReducers;