const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../community-notes.js');

module.exports = createHandler(handler);
