import React from 'react';
import {Link} from 'react-router';
import {Card} from 'semantic-ui-react';

const HomeScene = (props) => (
    <div className="center">
        <h1>{props.name}</h1>
    </div>
);



export default HomeScene;