const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../following.js');

module.exports = createHandler(handler);
