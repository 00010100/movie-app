import { createReducer } from 'redux-act';
import { getMovies, changePage, getMovieDetailsById, getRating } from 'actions';

const initialState = {
  movies: null,
  currentPage: 1,
  totalPages: null,
  totalResults: null,
  movieDetails: null,
};

export default createReducer(
  {
    [getMovies]: (state, payload) => ({
      ...state,
      movies: payload.results,
      currentPage: payload.page,
      totalPages: payload.total_pages,
      totalResults: payload.total_results,
    }),
    [changePage]: (state, payload) => ({
      ...state,
      currentPage: payload,
    }),
    [getMovieDetailsById]: (state, payload) => {
      const movies = state.movies;

      return {
        ...state,
        movieDetails: movies.filter((el) => el.id === payload)[0],
      };
    },
    [getRating]: (state, payload) => ({
      ...state,
      movieDetails: {
        ...state.movieDetails,
        rating: payload.rating,
      },
    }),
  },
  initialState,
);
