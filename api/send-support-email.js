const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../send-support-email.js');

module.exports = createHandler(handler);
