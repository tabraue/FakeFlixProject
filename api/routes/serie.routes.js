const router = require('express').Router();
const { checkAuth, isAdmin } = require('../middleware/auth');
const { getOneSerie, getAllSeries, createSerie, updateSerie, getSeriesByCategory } = require('../controllers/serie.controller');

router.get('/:serieId', checkAuth, getOneSerie)
router.get('/', checkAuth, getAllSeries)
router.get('/categoryId/:categoryId', checkAuth, getSeriesByCategory);
router.post('/', checkAuth, isAdmin, createSerie)
router.patch('/:serieId', checkAuth, updateSerie);

module.exports = router;
