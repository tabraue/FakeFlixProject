const router = require('express').Router();
const { checkAuth } = require('../middleware/auth')
const { subscribe, unSubscribe, getAllSubscriptions } = require('../controllers/subscription.controller');

router.get('/', getAllSubscriptions)
router.post('/:userId', checkAuth, subscribe)
router.delete('/:userId', checkAuth, unSubscribe);


module.exports = router;
