import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTooltip from 'react-tooltip';

import MovieDetails from 'components/MovieDetails/MovieDetails';
import Modal from 'components/UI/Modal/Modal';
import Spinner from 'components/UI/Spinner/Spinner';
import Pagination from 'components/Pagination/Pagination';
import Movie from 'components/Movie/Movie';
import ApiService from 'utils/api';
import { getMovies, changePage, getMovieDetailsById } from 'actions';

import './Movies.scss';

@connect(
  (state) => ({
    movies: state.movies.movies,
    currentPage: state.movies.currentPage,
    totalPage: state.movies.totalPage,
    totalResults: state.movies.totalResults,
    posterBgPath: state.movies.movieDetails && state.movies.movieDetails.poster_bg_path,
  }),
  { getMovies, changePage, getMovieDetailsById },
)
class Movies extends Component {
  apiService = new ApiService();

  state = {
    loading: false,
    isShowModal: false,
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
      return <Movie movie={movie} key={movie.id} clicked={() => this.getMovieId(movie.id)} />;
    });
  };

  handlePageChange = (activePage) => {
    this.setState({ activePage }, () => this.props.changePage(activePage));
  };

  getMovieId = (id) => {
    this.props.getMovieDetailsById(id);
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState((prevState) => ({ isShowModal: !prevState.isShowModal }));
  };

  render() {
    const { movies, currentPage, totalResults, posterBgPath } = this.props;
    const { loading, isShowModal } = this.state;

    if (!movies || loading) {
      return <Spinner />;
    }

    return (
      <div className="Movies">
        <h2 className="Movies__title">Last Releases</h2>
        <div className="Movies__grid">{this.renderMoviesList(movies)}</div>
        <Pagination
          currentPage={currentPage}
          clicked={this.handlePageChange}
          totalResults={totalResults}
        />
        <ReactTooltip id="movie" />
        {isShowModal && (
          <Modal show={isShowModal} modalClosed={this.toggleModal} poster={posterBgPath}>
            <MovieDetails />
          </Modal>
        )}
      </div>
    );
  }
}

export default Movies;
