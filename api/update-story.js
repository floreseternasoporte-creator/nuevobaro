const { createHandler } = require('./_netlifyAdapter');
const { handler } = require('../update-story.js');

module.exports = createHandler(handler);
