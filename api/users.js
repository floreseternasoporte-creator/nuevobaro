const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../users.js');

module.exports = createHandler(handler);
