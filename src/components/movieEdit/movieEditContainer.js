import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Link} from 'react-router';
import { Form, Button } from 'semantic-ui-react'
class MovieEdit extends Component {

    updateMovieInfo () {
        console.log('Updated')
    }

    form() {
        return(
        <Form onSubmit={this.updateMovieInfo.bind(this)}>
            <h1 className="center">Edit : {this.props.activeMovie.title}</h1>
            <Form.Field>
                <label>Title</label>
                <input name="title" type="text" ref="title" value={this.props.activeMovie.title} placeholder="Title"/>
            </Form.Field>
            <Form.Field>
                <label>Genre(s)</label>
                <input name="genre" type="text" ref="genre" value={this.props.activeMovie.genre} placeholder="Action Adventure Comedy Crime Drama Historical Horror Musical SciFi War Western Other"/>
            </Form.Field>
            <Form.Field>
                <label>Release Date</label>
                <input name="releaseDate" type="text" ref="releaseDate" value={this.props.activeMovie.release_date} placeholder="YYYYMMDD"/>
            </Form.Field>
            <Form.Field>
                <label>Director</label>
                <input name="director" type="text" ref="director" value={this.props.activeMovie.director} placeholder="Director"/>
            </Form.Field>
            <Form.Field>
                <label>Cast</label>
                <input name="cast" type="text" ref="cast" value={this.props.activeMovie.cast} placeholder="Cast"/>
            </Form.Field>
            <Form.Field>
                <label>Poster link</label>
                <input name="image" type="text" ref="image" value={this.props.activeMovie.image} placeholder="https://website.com/xxx/image.png"/>
            </Form.Field>
            <Form.Field>
                <label>Trailer link</label>
                <input name="trailerLink" type="text" ref="trailerLink" value={this.props.activeMovie.trailer_link}placeholder="https://youtube.com/xxx"/>
            </Form.Field>
            <div className="center">
                <Link to="/movieInfo"><Button>Cancel</Button></Link>
                <Button type='submit'>Save</Button>
            </div>
        </Form>
        )
    }

    render() {
        if (!this.props.activeMovie){
            return(<div>
                <Header />
                <h4>/!\ No movie selected /!\</h4>
                <Footer />
            </div>)
        }
        return (
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
        activeMovie: state.activeMovie
    }
}

export default connect(mapStateToProps)(MovieEdit);