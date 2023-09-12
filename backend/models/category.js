const mongoose = require("mongoose");

const CScheme = new mongoose.Schema({
  Category: String,
});

const Category = mongoose.model("Category", CScheme);

module.exports = Category;
