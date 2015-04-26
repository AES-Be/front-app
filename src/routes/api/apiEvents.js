'use strict';

var express       = require('express');
var router        = express.Router();

var Discography   = require('../../controllers/eventsController');

var errorsHandler = require('../fixtures/errorsHandler');

/**
 * Get Photos data.
 */
router.get('/', function (req, res) {

  Discography.getAll()
      .then(function (articles) {

        return res.status(200).json(articles);
      })
      .catch(function (e) {

        return res.status(500).json(errorsHandler(e));
      });

});

module.exports = router;
