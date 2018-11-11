import React from 'react';

import './Movie.scss';

const Movie = (props) => {
  const { poster_path, title } = props.movie;

  return (
    <div className="Movie" data-tip={title} data-for="movie">
      <div onClick={props.clicked} className="Movie__inner">
        <img className="Movie__img" src={poster_path} alt={title} />
      </div>
    </div>
  );
};

export default Movie;
