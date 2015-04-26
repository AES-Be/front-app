'use strict';

var Events           = require('../models/eventsModel');

var getAll = function () {
  return Events.findAll({
    order: 'createdAt DESC'
  });
};

module.exports = {
  getAll: getAll
};
