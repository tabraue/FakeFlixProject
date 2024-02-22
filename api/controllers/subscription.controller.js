const User = require('../models/user.model')
const Subscription = require('../models/subscription.model');


/**
 * * Suscribirse a un plan (usuario)
 */
const subscribe = async (req, res) => {
  try {
    const user = res.locals.user
    const subscription = await Subscription.findByPk(req.body.subscriptionId)

    const updated = await user.setSubscription(subscription)
  
    console.log(updated)
      if (updated){
        res.status(200).json({ message: '--> ya estás suscrito!' })
      }else{
        res.status(404).json({ message: 'Oopsss '})
      }


  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot subscribe user.',
    });
  }
};

/**
 * * Ver todas las suscripciones disponibles
 */
const getAllSubscriptions = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get all subscriptions.',
    });
  }
};

/**
 * * Cancelar suscripción
 */
const unSubscribe = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  subscribe,
  unSubscribe,
  getAllSubscriptions,
};
