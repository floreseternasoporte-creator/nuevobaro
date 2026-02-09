const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../notes.js');

module.exports = createHandler(handler);
