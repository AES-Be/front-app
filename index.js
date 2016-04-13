'use strict';

var bodyParser = require('body-parser');
var compress = require('compression');
var config = require('config');
var express = require('express');
var favicon = require('serve-favicon');
var path = require('path');

var logger = require('./src/resources/logger');

var root = require('./src/routes/root');
var sitemap = require('./src/routes/sitemap');
var newsletter = require('./src/routes/newsletter');
var apiSendemail = require('./src/routes/api/apiSendEmail');

var app = express();

/*
  App Config
 */
app.use(compress());
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ reviver: true }));
app.use(express.static(path.join(__dirname, './src/static')));
app.use(favicon(__dirname + '/src/static/assets/img/favicon/favicon.ico'));

/*
  WWW to now-WWW
 */
app.get('/*', function (req, res, next) {
  if (req.headers.host.match(/^www/) !== null) {
    res.redirect(301, 'http://' + req.headers.host.replace(/^www\./, '') + req.url);
  } else {
    next();
  }
});

/*
  Routes
 */
app.use('/', root);
app.use('/sitemap.xml', sitemap);
app.use('/newsletter', newsletter);
app.use('/api/sendemail', apiSendemail);

/*
  404
 */
app.use(function (req, res, next) {
  res.status(404).render('index');
});

/*
  Logger
 */
logger.info({
  config: config,
  state: 'starting server...'
});

/*
  Server
 */
var http = app.listen(config.httpPort, function () {
  var port = http.address().port;
  logger.info({
    port: port,
    state: 'http server started!'
  });
});
