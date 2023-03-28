const movieService = require("./../service/movie.service");

class MovieController {
  async getMovies() {
    return await movieService.getMovies();
  }

  async createMovie(movie) {
    return await movieService.createMovie(movie);
  }

  async updateMovie(movie) {
    return await movieService.updateMovie(movie);
  }

  async deleteMovie(_id) {
    return await movieService.deleteMovie(_id);
  }

  async getMovieById(_id) {
    return await movieService.getMovieById(_id);
  }
}

module.exports = new MovieController();
