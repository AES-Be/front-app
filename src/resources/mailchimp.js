'use strict';

var MailChimpAPI = require('mailchimp').MailChimpAPI;
var config       = require('config');

var logger       = require('./logger');

var apiKey       = config.mailchimp.key;

var mcApi = null;

try {
  mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : true });
} catch (error) {
  logger.info({
    error: error.inner || error
  });
}

module.exports = mcApi;
