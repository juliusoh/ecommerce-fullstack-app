/** @format */

import express from 'express';
import * as dotenv from 'dotenv';
import {Sequelize} from 'sequelize-typescript';

dotenv.config();

const app = express();

const PORT: number | string = process.env['PORT'] || 5000;

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD, {
  dialect: 'mysql'
});

const dbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.info('Database connection established successfully');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

dbConnection();

app.listen(PORT, () => {
  console.info(`Server is running on port ${PORT}`);
});
