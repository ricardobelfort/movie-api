const { connect, disconnect } = require("./../config/mongo-config");
const { Movie } = require("./../models/movie.model");

class MovieRepository {
  constructor() {
    connect();
  }

  async createMovie(movie) {
    let data = {};
    data = await Movie.create(movie);
    return data;
  }

  async updateMovie(movie) {
    let data = {};
    data = await Movie.updateOne(movie);
    return data;
  }

  async getMovies() {
    let data = [];
    data = await Movie.find();
    return data;
  }

  async getMovieById(_id) {
    let data = {};
    data = await Movie.findById(_id);
    return data;
  }

  async deleteMovieById(_id) {
    let data = {};
    data = await Movie.findById(_id);
    return data;
  }
}

module.exports = new MovieRepository();
