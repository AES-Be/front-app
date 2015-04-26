'use strict';

var Sequelize = require('sequelize');
var config    = require('config');
var dbConfig  = config.get('dbConfig');

var sequelize = new Sequelize(dbConfig.dbName, dbConfig.login, dbConfig.pass, {
  host: dbConfig.host,
  dialect: 'mysql',

  pool: {
    max  : 5,
    min  : 0,
    idle : 10000
  },

  logging: false
});

sequelize.sync();

module.exports = sequelize;
