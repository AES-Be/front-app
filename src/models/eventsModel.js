'use strict';

var Sequelize     = require('sequelize');

var sqlConnection = require('../resources/sqlConnection');

module.exports    = sqlConnection.define('Events', {
  title               : Sequelize.STRING,
  artist              : Sequelize.STRING
});
