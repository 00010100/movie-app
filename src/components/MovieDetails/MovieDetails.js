import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';

import Spinner from 'components/UI/Spinner/Spinner';

import './MovieDetails.scss';

@connect(
  (state) => ({
    movieDetails: state.movies.movieDetails,
  }),
  null,
)
class MovieDetails extends Component {
  state = {
    loading: false,
  };

  render() {
    const { movieDetails } = this.props;

    if (!movieDetails) return <Spinner />;

    return (
      <div className="Details">
        <div className="Details__inner">
          <div className="Details__img">
            <img src={movieDetails.poster_path} alt={movieDetails.title} />
          </div>
          <div className="Details__desc">
            <h1 className="Details__title">
              {movieDetails.title} ({moment(movieDetails.release_date).format('YYYY')})
            </h1>
            <p className="Details__info">
              <span>Score: {movieDetails.vote_average}</span>
              <span>Rating {}</span>
              <span>
                Release date: {moment(movieDetails.release_date).format('MMMM DD[,] YYYY')}
              </span>
            </p>
            <div className="Details__content-wrap">
              <p className="Details__content">{movieDetails.overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
