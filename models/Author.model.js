const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema({
  authorsName: String,
  biography: String,
  
});

const Author = mongoose.model('Author', AuthorSchema);

module.exports = Author;