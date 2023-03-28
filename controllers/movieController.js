class MovieController {
  async getMovies() {
    return await "Método read";
  }

  async postMovie() {
    return await "Método post";
  }

  async putMovie() {
    return await "Método update";
  }

  async deleteMovie() {
    return await "Método delete";
  }
}

module.exports = new MovieController();
