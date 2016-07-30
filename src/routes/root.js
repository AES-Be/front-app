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
 * Get About page.
 */
router.get('/about', function (req, res) {

  res.render('index');

});

/**
 * Get About view.
 */
router.get('/view/about', function (req, res) {

  res.render('about');

});

/**
 * Get Events page.
 */
router.get('/events', function (req, res) {

  res.render('index');

});

/**
 * Get Events view.
 */
router.get('/view/events', function (req, res) {

  res.render('events');

});

/**
 * Get Membership page.
 */
router.get('/membership', function (req, res) {

  res.render('index');

});

/**
 * Get Membership view
 */
router.get('/view/membership', function (req, res) {

  res.render('membership');

});

/**
 * Get Students page.
 */
router.get('/students', function (req, res) {

  res.render('index');

});

/**
 * Get Students view
 */
router.get('/view/students', function (req, res) {

  res.render('students');

});

/**
 * Get signup page.
 */
router.get('/signup', function (req, res) {

  res.render('signup');

});

module.exports = router;
