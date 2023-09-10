const mongoose = require("mongoose");

const BookScheme = new mongoose.Schema({
  book_image: String,
  book_name: String,
  author_name: String,
  category: String,
  price: String,
  description: String,
});

const Books = mongoose.model("Books", BookScheme);

module.exports = Books;
