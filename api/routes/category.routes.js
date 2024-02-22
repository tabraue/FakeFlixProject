const router = require('express').Router();
const { checkAuth } = require('../middleware/auth');
const { getAllCategories, getOneCategory, createCategory, deleteCategory } = require('../controllers/category.controller');

router.get('/', checkAuth, getAllCategories)
router.get('/:categoryId', checkAuth, getOneCategory)
router.post('/', checkAuth, createCategory)
router.delete('/:categoryId', checkAuth, deleteCategory)

module.exports = router;
