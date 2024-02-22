const Serie = require('../models/serie.model');
const User = require('../models/user.model');

/**
 * * ADMIN
 * * Ver 1 usuario
 */
const getUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get user.',
    });
  }
};

/**
 * * Obtener mi info de usuario
 */
const getMyUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get user.',
    });
  }
};

/**
 * * Actualizar mi usuario
 */
const updateUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot update user.',
    });
  }
};

/**
 * * Borrar mi usuario
 */
const deleteUser = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot delete user.',
    });
  }
};

/**
 * * Ver mis series favoritas
 */
const getAllFavorites = async (req, res) => {
  try {

    const userId = res.locals.user.id


    //const favs = await user.getSeries()

    const user  = await User.findByPk(userId, {
      include: [
        {
          model: Serie,
          as: 'Favorite'
        }
      ]
    })

    res.status(200).json({
      series: user.Favorite
    })

    console.log(user);



  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get favs.',
    });
  }
};

/**
 * * Añadir serie a favoritas
 * 1. user
 * 2. serie
 * 3. => favorites
 */
const addFavorite = async (req, res) => {
  try {

    const { userId, serieId }= req.params

    const user = res.locals.user

    const serie = await Serie.findByPk(serieId)

    const fav = await user.addFavorite(serie)

    if(fav){
      res.status(200).json({
        message: '!!super serie añadida a tus favs',
        fav
      })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot add fav.',
    });
  }
};

/**
 * * Borrar serie de favoritas
 */
const deleteFavorite = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot delete fav.',
    });
  }
};

module.exports = {
  getUser,
  getMyUser,
  updateUser,
  deleteUser,
  getAllFavorites,
  addFavorite,
  deleteFavorite,
};
