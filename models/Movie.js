const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MovieSchema = Schema({
  director_id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: [true, "'{PATH}' alani zorunludur!"],
    maxlength: [
      15,
      "'{PATH}' alani ('{VALUE}'), ({MAXLENGTH}) karakterden kucuk olmalidir! ",
    ],
    minlength: [
      4,
      "'{PATH}' alani ('{VALUE}'), ({MINLENGTH}) karakterden buyuk olmalidir! ",
    ],
  },
  category: {
    type: String,
    maxLength: 30,
    minlength: 1,
  },
  country: {
    type: String,
    maxLength: 30,
    minlength: 1,
  },
  year: {
    type: Number,
    max: 2020,
    min: 1900,
  },
  imdb_score: {
    type: Number,
    max: 10,
    min: 1,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("movie", MovieSchema);
