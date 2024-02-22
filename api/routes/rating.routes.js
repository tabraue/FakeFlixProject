const router = require('express').Router();
const { getRating, createRating, updateRating, deleteRating } = require('../controllers/rating.controller');
const { checkAuth } = require('../middleware/auth');

router.get('/:serieId', checkAuth, getRating)
router.post('/:serieId', checkAuth, createRating)
router.patch('/:ratingId', checkAuth, updateRating)
router.delete('/:ratingId', checkAuth, deleteRating)

module.exports = router;
