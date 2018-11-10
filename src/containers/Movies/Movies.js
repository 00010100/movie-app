import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import Spinner from 'components/Spinner/Spinner';
import Pagination from 'components/Pagination/Pagination';
import Movie from 'components/Movie/Movie';
import ApiService from 'utils/api';
import { getMovies, changePage } from 'actions';

import './Movies.scss';

@connect(
  (state) => ({
    movies: state.movies.movies,
    currentPage: state.movies.currentPage,
    totalPage: state.movies.totalPage,
    totalResults: state.movies.totalResults,
  }),
  { getMovies, changePage },
)
class Movies extends Component {
  apiService = new ApiService();

  state = {
    loading: false,
    activePage: this.props.currentPage,
  };

  componentDidMount() {
    this.updateMovies();
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentPage !== prevProps.currentPage) {
      this.setState({ loading: true });
      this.updateMovies();
    }
  }

  updateMovies = () => {
    const { getMovies, currentPage } = this.props;

    this.apiService.getNowPlaying(currentPage).then((res) => {
      getMovies(res);
      this.setState({ loading: false });
    });
  };

  renderMoviesList = (movies) => {
    return movies.map((movie) => {
      return <Movie movie={movie} key={movie.id} />;
    });
  };

  handlePageChange = (activePage) => {
    this.setState({ activePage }, () => this.props.changePage(activePage));
  };

  render() {
    const { movies, currentPage, totalResults } = this.props;
    const { loading } = this.state;

    if (!movies || loading) {
      return <Spinner />;
    }

    return (
      <div className="Movies">
        <h2>Last Releases</h2>
        <div className="Movies__grid">{this.renderMoviesList(movies)}</div>
        <Pagination
          currentPage={currentPage}
          clicked={this.handlePageChange}
          totalResults={totalResults}
        />
        <ReactTooltip id="movie" />
      </div>
    );
  }
}

export default Movies;
