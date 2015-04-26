'use strict';

var sitemap  = require('sitemap');
var express  = require('express');
var router   = express.Router();

var sm = sitemap.createSitemap({
  hostname : '//www.aes-be.org',
  cacheTime : 1000 * 60 * 24
});

router.get('/', function (req, res) {
  if (sm.isCacheValid()) {
    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });
  } else {
    sm.urls = [];

    sm.add({
      url : 'http://www.aes-be.org/',
      changefreq :'monthly'
    });

    sm.add({
      url : 'http://www.aes-be.org/about',
      changefreq :'monthly'
    });

    sm.add({
      url : 'http://www.aes-be.org/events',
      changefreq :'weekly'
    });

    sm.add({
      url : 'http://www.aes-be.org/membership',
      changefreq :'monthly'
    });

    sm.add({
      url : 'http://www.aes-be.org/students',
      changefreq :'monthly'
    });

    sm.toXML(function (xml) {
      res.header('Content-Type', 'application/xml');
      res.send(xml);
    });

  }


});

module.exports = router;
