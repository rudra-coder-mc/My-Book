const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Books = require("../models/book");
const Category = require("../models/category");

router.post("/AddBook", (req, res) => {
  try {
    Books.insertMany({
      book_image: req.body.book_image,
      book_name: req.body.book_name,
      author_name: req.body.author_name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
    });
    res.json({ NewBook: true });
  } catch (error) {
    res.status(500).json({ NewBook: false, error: error.message });
  }
});
router.post("/DeleteBook", (req, res) => {
  let deleteBook = req.body.book_name;
  try {
    Books.deleteMany({ book_name: deleteBook }).then(() => {
      res.json({ DeleteBook: true });
    });
  } catch (error) {
    res.status(500).json({ DeleteBook: false, error: error.message });
  }
});
router.post("/UpdateBook", (req, res) => {
  try {
    res.send();
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
