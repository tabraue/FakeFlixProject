const Serie = require('../models/serie.model')
const Category = require('../models/category.model');

/**
 * * Ver una serie
 */
const getOneSerie = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get all series.',
    });
  }
};

/**
 * * Ver todas las series
 */
const getAllSeries = async (req, res) => {
  try {
    const series = await Serie.findAll()
    if(series){
      res.status(200).json({message: '>> aquí tienes!', series})
    }else{
      res.status(404).json({message: '>> No hay nadita por aquí '})    }


  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get all series.',
    });
  }
};

/**
 * * Ver todas las series según su categoría
 * 1º Traer la categoria correspondiente
 * 2º buscar las series donde....
 */
const getSeriesByCategory = async (req, res) => {
  try {
    // param => id category

    const categoryId = req.params.categoryId;

    const category = await Category.findByPk(categoryId);

    //console.log(categoryId); // == 5
   // console.log(category); //

   const series = await category.getSeries()

    if (series) {
      res.status(200).json({
        message: '--> aqui tienes todas las series de la categoría',
        series
      })
    }


    //const series

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot get all series.',
    });
  }
};

/**
 * * ADMIN Crear serie
 */
const createSerie = async (req, res) => {
  try {
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: '>> Cannot create serie.',
    });
  }
};

const updateSerie = async (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getOneSerie,
  getAllSeries,
  createSerie,
  updateSerie,
  getSeriesByCategory,
};
