var env = process.env;

module.exports = {
  logEntries: {
    token: env.logEntriesToken
  },
  loggerName: env.loggerName || 'AES-app',
  httpPort: process.env.PORT || env.httpPort || 3000,
  socialMedia: {
    twitter: '@aesbelgium'
  },
  postmark: {
    key: env.POSTMARK_API_TOKEN || 'test'
  },
  mailchimp: {
    key: env.mailchimp_key,
    newsletterListId: env.mailchimp_newsletter_list_id
  }
};
