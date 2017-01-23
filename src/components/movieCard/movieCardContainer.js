import React, {Component} from 'react';
import {connect} from 'react-redux';
import ReactPlayer from 'react-player';
import Header from '../header/headerContainer';
import Footer from '../footer/footerContainer';

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
                <div>
                <h2>{this.props.activeMovie.title}</h2>
                <table>
                    <tbody>
                    <tr>
                        <td rowSpan="7" colSpan="2"><img src={this.props.activeMovie.image} style={{width: 91, height: 134}}/></td>
                    </tr>
                    <tr>
                        <td>Director : {this.props.activeMovie.director}</td>
                    </tr>
                    <tr>
                        <td>Cast : {this.props.activeMovie.cast}</td>
                    </tr>
                    <tr>
                        <td>Genre : {this.props.activeMovie.genre}</td>
                    </tr>
                    <tr>
                        <td>Release Date : {this.props.activeMovie.release_date}</td>
                    </tr>
                    <tr>
                        <td>Uploader : {this.props.activeMovie.uploader}</td>
                    </tr>
                    <tr>
                        <td>Upload Date : {this.props.activeMovie.upload_date}</td>
                    </tr>
                    </tbody>
                </table>
                <h3>Trailer</h3>
                <ReactPlayer url={this.props.activeMovie.trailer_link} />
                </div>
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