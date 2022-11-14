const mongoose = require('mongoose');

const ReviewSchema = mongoose.Schema({
  reviewsName: String,
  text: String,
  authorOfReview: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Book'
  }
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;