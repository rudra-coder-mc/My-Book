const express = require("express");
const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/MyBooks";

const mongoDB = async () => {
  await mongoose
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
  
};

module.exports = mongoDB();
