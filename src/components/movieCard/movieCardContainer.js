import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Link} from 'react-router';
import { Grid, Segment } from 'semantic-ui-react'

class MovieCard extends Component {

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

                <h2 className="center">{this.props.activeMovie.title}</h2>

                <Grid columns={2} centered>
                    <Grid.Row stretched>
                        <Grid.Column width={2} className="imgTContainer">
                            <Segment><img src={this.props.activeMovie.image} className="imgThumbnail"/></Segment>
                        </Grid.Column>
                        <Grid.Column width={5} className="infoContainer">
                            <Segment textAlign="left">
                                <div><b>Director : </b>{this.props.activeMovie.director}</div>
                                <div><b>Cast : </b>{this.props.activeMovie.cast}</div>
                                <div><b>Genre(s) : </b>{this.props.activeMovie.genre}</div>
                                <div><b>Release Date : </b>{this.props.activeMovie.release_date}</div>
                                <div><b>Uploader : </b>{this.props.activeMovie.uploader}</div>
                                <div><b>Upload Date : </b>{this.props.activeMovie.upload_date}</div>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
                <Grid centered>
                    <Grid.Row>
                        <Grid.Column width={9} className="trailerContainer">
                            <Segment className="center">
                                <h4>Trailer</h4>
                                <ReactPlayer url={this.props.activeMovie.trailer_link}/>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

                <br/>

                <p className="center">
                    <Link to="/editMovie">Edit Movie</Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Link to="/">Delete Movie</Link>
                </p>

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

export default connect(mapStateToProps)(MovieCard);