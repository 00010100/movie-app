import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';

import Spinner from 'components/UI/Spinner/Spinner';
import ApiService from 'utils/api';
import { getRating } from 'actions';

import './MovieDetails.scss';

@connect(
  (state) => ({
    movieDetails: state.movies.movieDetails,
  }),
  { getRating },
)
class MovieDetails extends Component {
  apiService = new ApiService();

  static propTypes = {
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
  };

  componentDidMount() {
    const { movieDetails, getRating } = this.props;

    this.apiService.getMovieDetails(movieDetails.id).then((res) => {
      getRating(res);
    });
  }

  render() {
    const {
      movieDetails: { poster_path, title, release_date, vote_average, overview, rating },
    } = this.props;

    if (!this.props.movieDetails) return <Spinner />;

    return (
      <div className="Details">
        <div className="Details__inner">
          <div className="Details__img">
            <img src={poster_path} alt={title} />
          </div>
          <div className="Details__desc">
            <h1 className="Details__title">
              {title} ({moment(release_date).format('YYYY')})
            </h1>
            <p className="Details__info">
              <span>Score: {vote_average}</span>
              {rating && <span>Rating: {rating}</span>}
              <span>Release date: {moment(release_date).format('MMMM DD[,] YYYY')}</span>
            </p>
            <div className="Details__content-wrap">
              <p className="Details__content">{overview}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieDetails;
