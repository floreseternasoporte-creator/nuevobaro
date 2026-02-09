const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../likes.js');

module.exports = createHandler(handler);
