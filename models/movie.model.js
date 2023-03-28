const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      index: true,
      required: true,
      auto: true,
    },
    title: String,
    releaseDate: String,
    genre: String,
    imdb: Number,
    overview: String,
    image: Buffer,
  },
  { timestamps: { createDate: "created_at", updatedDate: "updated_at" } }
);

const Movie = mongoose.model("movie", movieSchema);

module.exports = {
  Movie,
};
