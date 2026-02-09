const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../notifications.js');

module.exports = createHandler(handler);
