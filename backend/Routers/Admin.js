const express = require("express");

const router = express.Router();
const Books = require("../models/book");

router.post("/AddBook", async (req, res) => {
  try {
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
  let deleteBookId = req.body.id;
  try {
    await Books.findByIdAndDelete({ _id: deleteBookId }).then(async () => {
      res.json({ DeleteBook: true });
      await Books.find({}).then((book) => {
        global.book = book;
      });
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
    ).then(async () => {
      await Books.find({}).then((book) => {
        global.book = book;
      });
    });
    res.json({ UpdateBook: true });
  } catch (error) {
    res.status(500).json({ UpdateBook: false, error: error.message });
  }
});

router.post("/UpdateData", async (req, res) => {
  let _id = req.body.id;
  try {
    let data = await Books.findById({ _id });

    res.json({ data });
  } catch (error) {
    res.status(500).json({ UpdateDATA: false, error: error.message });
  }
});

module.exports = router;
