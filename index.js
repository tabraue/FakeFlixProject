require('dotenv').config();
const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const sequelize = require('./db/index');
const router = require('./api/routes/routes');
const relationShips = require('./db/relationships');
const app = express();

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('>> Connection success!');
    await relationShips();
    await sequelize.sync(); //{force:true}
    console.log('>> Models synchronized');
  } catch (error) {
    console.log(error);
    throw new Error('>> DB connection error!');
  }
};

const init = async () => {
  try {
    app.use(cors());
    app.use(morgan('dev'));
    app.use(express.json());
    app.use('/api', router);
    await app.listen(process.env.PORT);
    console.log('>> FakeFlix is running!!');
    await dbConnection();
  } catch (error) {
    console.log(error);
    throw new Error('>> Connection error!');
  }
};

init();
