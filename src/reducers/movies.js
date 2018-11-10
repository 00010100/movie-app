import { createReducer } from 'redux-act';
import { getMovies } from 'actions';

const initialState = {
  movies: null,
};

export default createReducer(
  {
    [getMovies]: (state, payload) => ({
      ...state,
      movies: payload,
    }),
  },
  initialState,
);
