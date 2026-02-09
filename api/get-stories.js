const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../get-stories.js');

module.exports = createHandler(handler);
