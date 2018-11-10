import React from 'react';
import ReactTooltip from 'react-tooltip';

import './Movie.scss';

const Movie = ({ movie }) => {
  const { poster_path, title } = movie;

  return (
    <div className="Movie" data-tip={title} data-for="movie">
      <img className="Movie__img" src={poster_path} alt={title} />
      <ReactTooltip id="movie" />
    </div>
  );
};

export default Movie;
