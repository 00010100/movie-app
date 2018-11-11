import { createAction } from 'redux-act';

export const getMovies = createAction('Get Movies');
export const getMovieDetailsById = createAction('Get Movie Details By Id');
export const changePage = createAction('Change Page');