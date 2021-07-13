const  Sequelize  = require('sequelize');

module.exports = new Sequelize('postgres', 'postgres', 'postgres', {
    host: 'localhost',
    dialect:'postgres',
  });