const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const movieController = require("./controllers/movie.controller");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.post("/api/movie", (req, res) => {
  movieController.createMovie(req.body).then((data) => res.json(data));
});

app.get("/api/movies", (req, res) => {
  movieController.getMovies().then((data) => res.json(data));
});

app.get("/api/movie/:id", (req, res) => {
  movieController.getMovieById(req.params.id).then((data) => res.json(data));
});

app.put("/api/movie", (req, res) => {
  movieController.updateMovie(req.body).then((data) => res.json(data));
});

app.delete("/api/movie/:id", (req, res) => {
  movieController.deleteMovie(req.params.id).then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});
