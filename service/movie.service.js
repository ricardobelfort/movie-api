const movieRepository = require("../repository/movie.repository");

class MovieService {
  constructor() {}

  async getMovies() {
    return await movieRepository.getMovies();
  }

  async createMovie(movie) {
    return await movieRepository.createMovie(movie);
  }

  async updateMovie(movie) {
    return await movieRepository.updateMovie(movie);
  }

  async deleteMovie(_id) {
    return await movieRepository.deleteMovie(_id);
  }

  async getMovieById(_id) {
    return await movieRepository.getMovieById(_id);
  }
}

module.exports = new MovieService();
