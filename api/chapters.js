const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../chapters.js');

module.exports = createHandler(handler);
