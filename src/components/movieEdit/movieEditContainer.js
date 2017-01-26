import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Link} from 'react-router';
import { Form, Button, Grid } from 'semantic-ui-react'
class MovieEdit extends Component {

    updateMovieInfo () {
        console.log('Updated')
    }

    form() {
        return(
        <div>
            <h1 className="center">Edit : {this.props.activeMovie.title}</h1>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column width={4}></Grid.Column>
                    <Grid.Column width={8}>

                        <Form onSubmit={this.updateMovieInfo.bind(this)}>
                            <Form.Field>
                                <label>Title</label>
                                <input value={this.props.activeMovie.title} name="title" type="text" ref="title" placeholder="Title"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Genre(s)</label>
                                <input value={this.props.activeMovie.genre} name="genre" type="text" ref="genre" placeholder="Action,Adventure,Comedy,Crime,Drama,Historical,Horror,Musical,SciFi,War,Western,Other"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Release Date</label>
                                <input value={this.props.activeMovie.release_date} name="releaseDate" type="text" ref="releaseDate" placeholder="YYYYMMDD"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Director</label>
                                <input value={this.props.activeMovie.director} name="director" type="text" ref="director" placeholder="Director"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Cast</label>
                                <input value={this.props.activeMovie.cast} name="cast" type="text" ref="cast" placeholder="Cast"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Poster link</label>
                                <input value={this.props.activeMovie.image} name="image" type="text" ref="image" placeholder="https://website.com/xxx/image.png"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Trailer link</label>
                                <input value={this.props.activeMovie.trailer_link} name="trailerLink" type="text" ref="trailerLink" placeholder="https://youtube.com/xxx"/>
                            </Form.Field>
                            <div className="center">
                                <Link to="/movieInfo"><Button>Cancel</Button></Link>
                                <Link to="/movieInfo"><Button type='submit'>Save</Button></Link>
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
                <br/>
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