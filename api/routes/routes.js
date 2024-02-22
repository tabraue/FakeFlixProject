const router = require('express').Router();
const categoryRouter = require('./category.routes');
const profileRouter = require('./profile.routes');
const ratingRouter = require('./rating.routes');
const serieRouter = require('./serie.routes');
const subscriptionRouter = require('./subscription.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.routes')
const favoriteRouter = require('./favorites.routes')

router.use('/auth', authRouter);
router.use('/category', categoryRouter);
router.use('/profile', profileRouter);
router.use('/rating', ratingRouter);
router.use('/serie', serieRouter);
router.use('/subscription', subscriptionRouter);
router.use('/user', userRouter);
router.use('/favorite', favoriteRouter)

module.exports = router;
