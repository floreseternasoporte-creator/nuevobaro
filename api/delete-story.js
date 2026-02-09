const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../delete-story.js');

module.exports = createHandler(handler);
