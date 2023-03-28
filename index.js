const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const movieController = require("./controllers/movieController");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json("Hello World");
});

app.post("/api/movie", (req, res) => {
  movieController.postMovie().then((data) => res.json(data));
});

app.get("/api/movie", (req, res) => {
  movieController.getMovies().then((data) => res.json(data));
});

app.put("/api/movie", (req, res) => {
  movieController.putMovie().then((data) => res.json(data));
});

app.delete("/api/movie", (req, res) => {
  movieController.deleteMovie().then((data) => res.json(data));
});

app.listen(port, () => {
  console.log(`Server listening on the port ${port}`);
});
