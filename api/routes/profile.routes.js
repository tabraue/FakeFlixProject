const router = require('express').Router();
const { checkAuth } = require('../middleware/auth')
const { getProfile, createProfile, updateProfile, deleteProfile } = require('../controllers/profile.controller');

router.get('/:userId', checkAuth, getProfile)
router.post('/:userId', checkAuth, createProfile)
router.patch('/:profileId', checkAuth, updateProfile)
router.delete('/:profileId', checkAuth, deleteProfile)


module.exports = router;