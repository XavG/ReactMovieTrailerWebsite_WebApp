import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link, hashHistory} from 'react-router';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

class AddMovie extends Component{

    getTopId () {
        var topId = 0;
        this.props.movies.map((movie) => {
            if (movie.id > topId) {
                topId = movie.id;
            }});
        return(topId);
    }

    addNewMovie(event) {
        event.preventDefault();
        if (!this.inputsOK()) {
            console.log("Inputs not OK.");
        } else {
            let id = this.getTopId() + 1;
            let title = this.refs.title.value;
            let genre = this.refs.genre.value;
            let release_date = this.refs.releaseDate.value;
            let director = this.refs.director.value;
            let cast = this.refs.cast.value;
            let image = this.refs.image.value;
            let trailer_link = this.refs.trailerLink.value;
            let uploader = 'Mark';
            let upload_date = 20199999;
            this.props.movies.push({id, title, genre, release_date, director, cast, image, trailer_link, uploader, upload_date});
            console.log('Movie Added');
            this.cleanRefs();
        }
    }

    checkTitle() {
        if (toString(this.refs.title.value) && this.refs.title.value != '') {
            return true;
        } else {
            return false;
        }
    }

    checkRDate() {
        if (parseInt(this.refs.releaseDate.value) && this.refs.releaseDate.value.length == 8) {
            return true;
        } else {
            return false;
        }
    }

    inputsOK(){
        if (this.checkTitle() && this.checkRDate()) {
            return true;
        } else {
            return false;
        }
    }

    cleanRefs() {
        this.refs.title.value = '';
        this.refs.genre.value = '';
        this.refs.releaseDate.value = '';
        this.refs.director.value = '';
        this.refs.cast.value = '';
        this.refs.image.value = '';
        this.refs.trailerLink.value = '';
    }

    form() {
        return (
            <div>
            <h1 className="center">Add New Movie</h1>
                <Grid>
                    <Grid.Row columns={3}>
                        <Grid.Column width={4}></Grid.Column>
                        <Grid.Column width={8}>

                            <Form onSubmit={this.addNewMovie.bind(this)}>
                                <Form.Field>
                                    <label>Title</label>
                                    <input name="title" type="text" ref="title" placeholder="Title"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Genre(s)</label>
                                    <input name="genre" type="text" ref="genre" placeholder="Action,Adventure,Comedy,Crime,Drama,Historical,Horror,Musical,SciFi,War,Western,Other"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Release Date</label>
                                    <input name="releaseDate" type="text" ref="releaseDate" placeholder="YYYYMMDD"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Director</label>
                                    <input name="director" type="text" ref="director" placeholder="Director"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Cast</label>
                                    <input name="cast" type="text" ref="cast" placeholder="Cast"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Poster link</label>
                                    <input name="image" type="text" ref="image" placeholder="https://website.com/xxx/image.png"/>
                                </Form.Field>
                                <Form.Field>
                                    <label>Trailer link</label>
                                    <input name="trailerLink" type="text" ref="trailerLink" placeholder="https://youtube.com/xxx"/>
                                </Form.Field>
                                <div className="center">
                                    <Button type='submit'>Add New Movie</Button>
                                </div>
                            </Form>

                        </Grid.Column>
                        <Grid.Column width={4} ></Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
            )
    }

    render() {
        return(
            <div>
                <Header />
                <br/>
                {this.form()}
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

export default connect(mapStateToProps)(AddMovie);