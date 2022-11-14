const Book = require('../models/Book.model');
const Genre = require('../models/Genre.model');
const Author = require('../models/Author.model');
const Booksreview = require('../models/Booksreview.model');

module.exports.booksController = {
  getBooks: function (req, res) {
    Book.find().then((a) => {
      res.json(a)
  }).catch({ "error": "Ошибка при добавлении книги" })},
  getStock: (req, res) => {
    Book.find({}, {availability: 'true'}).then((a) => {
        res.json(a)
    }).catch({ "error": "Ошибка при добавлении новой книги" })},
  addBooks: function (req, res) {
    Book.create({
      name: req.body.name,
      price: req.body.author,
      genre: req.body.author
    }).then((book) => {
      res.json(book);
    }).catch({ "error": "Ошибка при добавлении новой книги" });
  },
  getBooksById: function (req, res) {
    Book.findById(req.params.Id).then((books) => {
      res.json(books);
    });
  },
  removeBooks: function (req, res) {
    Book.findByIdAndRemove(req.params.BookId).then(() => {
      res.json('deleted');
    });
  },
  updateBooks: function (req, res) {
    Book.findByIdAndUpdate(
      req.params.BookId,
      {
      name: req.body.name,
      price: req.body.price,
      availability: req.body.availability,
      isCaffeine: req.body.isCaffeine,
      volume: req.body.volume,
      description: req.body.description
      },
      { new: true },
    ).then((book) => {
      res.json(book);
    });
  },
  addGenre: function (req, res) {
    Genre.create({
    description: String,  
    }).then((genre) => {
      res.json(genre);
    });
  },
  removeGenre: function (req, res) {
    Genre.findByIdAndRemove(req.params.GenreId).then(() => {
      res.json('deleted');
    });
},
getGenres: function (req, res) {
  Genre.find().then((a) => {
    res.json(a)
});
},
updateGenres: function (req, res) {
  Genre.findByIdAndUpdate(
    req.params.GenreId,
    {
      reviewsName: req.body.reviewsName,
      text: req.body.text,
      authorOfReview: req.body.authorOfReview},
      { new: true }
  ).then((genre) => {
    res.json(genre);
  });
},
removeReview: function (req, res) {
  Review.findByIdAndRemove(req.params.ReviewId).then(() => {
    res.json('deleted');
  });
},
getReviewById: function (req, res) {
  Review.findById(req.params.Id).then((review) => {
    res.json(review);
  });
},

}