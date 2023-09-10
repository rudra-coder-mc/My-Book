const express = require("express");
const mongoose = require("mongoose");
const Books = require("./models/book");

const mongoURL = "mongodb://127.0.0.1:27017/MyBooks";

const mongoDB = () => {
  mongoose
    .connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connection");
    })
    .catch((err) => {
      console.log(err);
    });

  Books.find({}).then((book) => {
    // console.log(book);
  });
};

module.exports = mongoDB();
