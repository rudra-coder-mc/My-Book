const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Books = require("../models/book");
const Category = require("../models/category");

router.post("/AddBook", async (req, res) => {
  try {
    // Books.insertMany();
    const newBook = new Books({
      book_image: req.body.book_image,
      book_name: req.body.book_name,
      author_name: req.body.author_name,
      category: req.body.category,
      price: req.body.price,
      description: req.body.description,
    });
    await newBook.save();
    res.json({ NewBook: true });
  } catch (error) {
    res.status(500).json({ NewBook: false, error: error.message });
  }
});
router.post("/DeleteBook", async (req, res) => {
  let deleteBook = req.body.book_name;
  try {
    await Books.deleteMany({ book_name: deleteBook }).then(() => {
      res.json({ DeleteBook: true });
    });
  } catch (error) {
    res.status(500).json({ DeleteBook: false, error: error.message });
  }
});
router.post("/UpdateBook", async (req, res) => {
  let updateBook = req.body.book_name;
  try {
    await Books.updateOne(
      { book_name: updateBook },
      {
        $set: {
          book_image: req.body.book_image,
          book_name: req.body.book_name,
          author_name: req.body.author_name,
          category: req.body.category,
          price: req.body.price,
          description: req.body.description,
        },
      }
    );
    res.json({ UpdateBook: true });
  } catch (error) {
    res.status(500).json({ UpdateBook: false, error: error.message });
  }
});

module.exports = router;
