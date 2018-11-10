import React from 'react';

import './Movie.scss';

const Movie = ({ movie }) => {
  const { poster_path, title } = movie;

  return (
    <div className="Movie" data-tip={title} data-for="movie">
      <img className="Movie__img" src={poster_path} alt={title} />
    </div>
  );
};

export default Movie;
