const { Router } = require('express');

const router = Router();

router.use(require('./books.route'));

module.exports = router;
