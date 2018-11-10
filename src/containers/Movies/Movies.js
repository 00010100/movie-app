import React, { Component } from 'react';
import { connect } from 'react-redux';

import Spinner from 'components/Spinner/Spinner';
import Movie from 'components/Movie/Movie';
import ApiService from 'utils/api';
import { getMovies } from 'actions';

import './Movies.scss';

@connect(
  (state) => ({
    movies: state.movies.movies,
  }),
  { getMovies },
)
class Movies extends Component {
  apiService = new ApiService();

  componentDidMount() {
    this.apiService.getNowPlaying().then((res) => {
      this.props.getMovies(res);
    });
  }

  renderMoviesList = (movies) => {
    return movies.map((movie) => {
      return <Movie movie={movie} key={movie.id} />;
    });
  };

  render() {
    const { movies } = this.props;

    if (!movies) {
      return <Spinner />;
    }

    return (
      <div className="Movies">
        <h2>Last Releases</h2>
        <div className="Movies__grid">{this.renderMoviesList(movies)}</div>
      </div>
    );
  }
}

export default Movies;
