'use strict';

var express      = require('express');
var router       = express.Router();

/**
 * Get root page.
 */
router.get('/', function (req, res) {

  res.render('index');

});

/**
 * Get Home page.
 */
router.get('/home', function (req, res) {

  res.render('index');

});

/**
 * Get Home view.
 */
router.get('/view/home', function (req, res) {

  res.render('home');

});

/**
 * Get Studio page.
 */
router.get('/studio', function (req, res) {

  res.render('index');

});

/**
 * Get Studio view.
 */
router.get('/view/studio', function (req, res) {

  res.render('studio');

});

/**
 * Get Discography page.
 */
router.get('/discography', function (req, res) {

  res.render('index');

});

/**
 * Get Discography view.
 */
router.get('/view/discography', function (req, res) {

  res.render('discography');

});

/**
 * Get Contact page.
 */
router.get('/contact', function (req, res) {

  res.render('index');

});

/**
 * Get Contact view
 */
router.get('/view/contact', function (req, res) {

  res.render('contact');

});

module.exports = router;
