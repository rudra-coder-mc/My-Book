const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Books = require("../models/book");
const Category = require("../models/category");

Books.find({}).then((book) => {
  global.book = book;
});
Category.find({}).then((Category) => {
  // console.log(Category);
  global.Category = Category;
  // console.log(global.Category);
});

router.post("/bookData", (req, res) => {
  try {
    res.send([global.book, global.Category]);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
