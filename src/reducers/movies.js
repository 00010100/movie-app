import { createReducer } from 'redux-act';
import { getMovies, changePage } from 'actions';

const initialState = {
  movies: null,
  currentPage: 1,
  totalPages: null,
  totalResults: null,
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
  },
  initialState,
);
