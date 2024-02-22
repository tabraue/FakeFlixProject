const { getUser, updateUser, deleteUser, getMyUser } = require('../controllers/user.controller');
const { checkAuth, isAdmin } = require('../middleware/auth');

const router = require('express').Router();

router.get('/:userId', checkAuth, isAdmin, getUser);
router.get('/', checkAuth, getMyUser)
router.patch('/', checkAuth, updateUser);
router.delete('/:userId', checkAuth, deleteUser);

module.exports = router