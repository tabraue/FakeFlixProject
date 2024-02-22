const User = require('../models/user.model')
const Profile = require('../models/profile.model')

/**
 * * Obtener el perfil del usuario
 */
const getProfile = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get your profile.',
    });
  }
};

/**
 * * Crear el perfil del usuario
 * 1. body: nick / profileImg
 * 2. necesito user
 * 3. metodo concreto
 */
const createProfile = async (req, res) => {
  try {
    const user = res.locals.user

   const profile = await Profile.create(req.body)

   const seteo = await user.setProfile(profile)

    if (seteo){
      res.status(200).json({ message: '--> Perfil creado', profile })
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot create profile.',
    });
  }
};

const updateProfile = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteProfile = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
};
