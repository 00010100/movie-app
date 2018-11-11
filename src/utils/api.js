export default class MovieService {
  _apiBase = 'http://api.themoviedb.org/3';
  _apiKey = '?api_key=ebea8cfca72fdff8d2624ad7bbf78e4c';
  _posterBase = 'http://image.tmdb.org/t/p';
  _defaultImg = require('../assets/default.jpg');

  getResource = async (url, pageNumber) => {
    const res = await fetch(`${this._apiBase}${url}${this._apiKey}&page=${pageNumber}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }

    return await res.json();
  };

  getNowPlaying = async (pageNumber) => {
    const res = await this.getResource(`/movie/now_playing`, pageNumber);

    return {
      ...res,
      results: res.results.map(this._transformMovies),
    };
  };

  _getPosterPath = (path, size) => {
    if (!path) {
      return this._defaultImg;
    }

    return `${this._posterBase}/${size}${path}`
  };

  _transformMovies = (movie) => {
    return {
      ...movie,
      poster_path: this._getPosterPath(movie.poster_path, 'w342'),
      poster_bg_path: this._getPosterPath(movie.poster_path, 'original'),
    };
  }
}
