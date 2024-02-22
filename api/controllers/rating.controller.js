/**
 * * Obtener todos los rating de una serie por su id
 */
const getRating = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get the ratings.',
    });
  }
};

/**
 * * Crear el rating para una serie
 * * Modificar la puntuación (rating) de la serie
 */
const createRating = async (req, res) => {
  try {

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot create the rating.',
    });
  }
};

const updateRating = async (req, res) => {
  try {
  } catch (error) {}
};

const deleteRating = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getRating,
  createRating,
  updateRating,
  deleteRating,
};
