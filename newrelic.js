var config = require('config');

exports.config = {

  app_name: ['AES-Front-App'],

  license_key: config.newRelic.key,
  logging: {

    level: 'info'
  }
};
