import React from 'react';
import PropTypes from 'prop-types';

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

Movie.propTypes = {
  poster_path: PropTypes.string,
  title: PropTypes.string,
}

export default Movie;
