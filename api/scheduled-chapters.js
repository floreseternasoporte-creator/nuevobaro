const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../scheduled-chapters.js');

module.exports = createHandler(handler);
