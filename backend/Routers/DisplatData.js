const express = require("express");
const router = express.Router();
const Books = require("../models/book");
const Category = require("../models/category");
router.get("/bookData", (req, res) => {
  Books.find({}).then((book) => {
    global.book = book;
  });
  Category.find({}).then((Category) => {
    global.Category = Category;
  });
  try {
    res.send([global.book, global.Category]);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
