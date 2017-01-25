import React from 'react';
import {Link} from 'react-router';
import {Menu} from 'semantic-ui-react';

export default () => {
    return(
        <Menu>
            <Menu.Menu>
                <Menu.Item>
                    <Link to="/">WatchMeNow.com</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/allMovies">All Movies</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/addMovie">Add Movie</Link>
                </Menu.Item>
            </Menu.Menu>
            <Menu.Menu position="right">
                <Menu.Item>
                    <Link to="/login">Login</Link>
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}