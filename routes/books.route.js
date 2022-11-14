const { Router } = require('express');
const { booksController } = require('../controllers/book.controller');

const router = Router();

router.get('/books', booksController.getBooks);
router.get('/books/in-stock', booksController.getStock);
router.get('/books/:id', booksController.getBooksById);
router.post('/books', booksController.addBooks);
router.delete('/books/:id', booksController.removeBooks);
router.patch('/books/:id', booksController.updateBooks);
router.get('/genres', booksController.getGenres);
router.get('/review/:id', booksController.getReviewById);
router.delete('/review/:id', booksController.removeReview);
router.post('/genre', booksController.addGenre);
router.delete('/genre/:id', booksController.removeGenre);
router.patch('/genre/:id', booksController.updateGenres);

module.exports = router;
