const mongoose = require("mongoose");

const BookScheme = new mongoose.Schema({
  book_image: {
    type: String,
    required: true,
    unique: true,
  },
  book_name: {
    type: String,
    required: true,
    unique: true,
  },
  author_name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Books = mongoose.model("Books", BookScheme);

module.exports = Books;
