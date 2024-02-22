const router = require('express').Router();
const { checkAuth } = require('../middleware/auth');
const {
  getAllFavorites,
  addFavorite,
  deleteFavorite,
} = require('../controllers/user.controller');

router.get('/:userId', checkAuth, getAllFavorites)
router.post('/:userId/serie/:serieId', checkAuth, addFavorite);
router.delete('/:userId/serie/:serieId', checkAuth, deleteFavorite);

module.exports = router;