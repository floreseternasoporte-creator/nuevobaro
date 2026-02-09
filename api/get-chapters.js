const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../get-chapters.js');

module.exports = createHandler(handler);
