const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  name: String,
  author: String,
  genre: String
});

const Book = mongoose.model('Book', BookSchema);

module.exports = Book;
