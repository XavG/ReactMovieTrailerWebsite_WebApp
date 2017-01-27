import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';
import {Link, hashHistory} from 'react-router';
import {Grid, Segment, Button} from 'semantic-ui-react';

class MovieCard extends Component {

    editCheckToken() {
        return fetch('http://localhost:8080/api/checkToken ', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('webToken')
            })
        })
            .then(function(res){ res.json().then(function(rez) {
                if (rez.message == "USER_TOKEN_INVALIDITY") {
                    console.log("Token error : ", rez.message);
                } else {
                    console.log("Logged in -> Going to EDIT.");
                    hashHistory.push('/editMovie');
                }
            })})

            .catch(function(res){
                console.log("ERROR", res);
            })
    }

    deleteCheckToken() {
        return fetch('http://localhost:8080/api/checkToken ', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('webToken')
            })

        })
            .then(function(res){ res.json().then(function(rez) {
                if (rez.message == "USER_TOKEN_INVALIDITY") {
                    console.log("Token error : ", rez.message);
                } else {
                    console.log("Logged in -> Going to DELETE.");
                    // Need to link to server cf server side, server.js -> router.post('/removefilm'
                    hashHistory.push('/');
                }
            })})

            .catch(function(res){
                console.log("ERROR :", res);
            })
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
                    <Button onClick={this.editCheckToken.bind(this)}>Edit Movie</Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button onClick={this.deleteCheckToken.bind(this)}>Delete Movie</Button>
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